import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import Svg,{
    Defs,
    G,
    LinearGradient,
    Path,
    Stop
} from 'react-native-svg';
import {Spring, EasingFunctions} from '../timing-functions';
import {lightenColor, Tweener, makeCircle} from '.';

const SELCTED_MARKER_ANIMATION_DURATION = 1000;
const SELCTED_MARKER_ANIMATION_DELAY_1 = SELCTED_MARKER_ANIMATION_DURATION * .2;
const SELCTED_MARKER_ANIMATION_DELAY_2 = SELCTED_MARKER_ANIMATION_DURATION * .3;
const UNSELCTED_MARKER_ANIMATION_DURATION = 500;
const UNSELCTED_MARKER_ANIMATION_DELAY_1 = UNSELCTED_MARKER_ANIMATION_DURATION * .2;
const UNSELCTED_MARKER_ANIMATION_DELAY_2 = UNSELCTED_MARKER_ANIMATION_DURATION * .3;
const MARKER_RADIUS = 15;
const MARKER_RADIUS_2 = MARKER_RADIUS * .75;
const MARKER_RADIUS_3 = MARKER_RADIUS * .5;
const MARKER_RADIUS_SQUARED = Math.pow(MARKER_RADIUS, 2);
const START_ANIMATION_DURATION = 750;

const spring1 = new Spring({friction: 300, frequency: 500});
const spring2 = new Spring({friction: 300, frequency: 400});
const spring3 = new Spring({friction: 300, frequency: 600});

class AmimatedCirclesMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        r1: 0,
        r2: 0,
        r3: 0
    };
    this.active = this.props.active;
    this.tweenerStartAnimation = new Tweener(START_ANIMATION_DURATION, t => {
          this.setState({
              r1: t,
              r2: 0,
              r3: 0
          });
    }, spring2.interpolate.bind(spring2), false);
    this.tweenerActiveAnimation = new Tweener(SELCTED_MARKER_ANIMATION_DURATION, (t, timeLeft) => {
          this.setState({
              r1: spring1.interpolate(t),
              r2: spring2.interpolate(1 - (timeLeft / (SELCTED_MARKER_ANIMATION_DURATION - SELCTED_MARKER_ANIMATION_DELAY_1))),
              r3: spring3.interpolate(1 - (timeLeft / (SELCTED_MARKER_ANIMATION_DURATION - SELCTED_MARKER_ANIMATION_DELAY_2)))
          });
    }, EasingFunctions.linear, false);
    this.tweenerInactiveAnimation = new Tweener(UNSELCTED_MARKER_ANIMATION_DURATION, (t, timeLeft) => {
          this.setState({
              r1: spring1.interpolate(t),
              r2: spring2.interpolate(timeLeft / (UNSELCTED_MARKER_ANIMATION_DURATION - SELCTED_MARKER_ANIMATION_DELAY_1)),
              r3: spring3.interpolate(timeLeft / (UNSELCTED_MARKER_ANIMATION_DURATION - SELCTED_MARKER_ANIMATION_DELAY_2))
          });
    }, EasingFunctions.linear, false);
    // If active, start animation???
  }

  componentDidMount() {
    this.startAnimationPlaying = true;
    this._playStartAnimation();
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.active) {
        this.active = nextProps.active;
          nextProps.active ? this._playActiveAnimation() : this._playInactiveAnimation();
      }
  }

  componentWillUnmount() {
    this.tweenerActiveAnimation.stop();
    this.tweenerInactiveAnimation.stop();
    this.tweenerStartAnimation.stop();
    this.startAnimationPlaying = false;
    this.active= false;
  }

  _playStartAnimation() {
    this.tweenerStartAnimation.resetAndPlay();
  }

  _playActiveAnimation() {
    this.tweenerActiveAnimation.resetAndPlay();
  }

  _playInactiveAnimation() {
    this.tweenerInactiveAnimation.resetAndPlay();
  }

  _makeMarker(cx, cy) {
    return (
      <G>
        <Path d={makeCircle(cx, cy, this.state.r3 * MARKER_RADIUS)} fill={lightenColor(this.props.baseColor, .3) || 'rgba(0,255,0,.75)'}/>
        <Path style={styles.circle2} d={makeCircle(cx, cy, this.state.r2 * MARKER_RADIUS_2)} fill={lightenColor(this.props.baseColor, .1) || 'rgba(0,0,255,.75)'}/>
        <Path style={styles.circle3} d={makeCircle(cx, cy, this.state.r1 * MARKER_RADIUS_3)} fill={this.props.baseColor || 'rgba(255,0,0,.75)'}/>
      </G>
    );
  }

  render() {
      return this._makeMarker(this.props.cx, this.props.cy);
  }
}

const styles = StyleSheet.create({
  circle2: {
    opacity: .5
  },
  circle3: {
    opacity: .25
  }
});

export default AmimatedCirclesMarker;
