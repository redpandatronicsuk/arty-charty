import React, {Component} from 'react';
import {
  Animated,
  Responder,
  View,
  Easing
} from 'react-native';
import Svg,{
    Defs,
    G,
    LinearGradient,
    Path,
    Stop
} from 'react-native-svg';
import {Spring,EasingFunctions} from '../timing-functions';
import {makeArc, computeChartSum, Tweener} from '.';

const CHART_GROW_ANIMATION_DURATION = 3000;
const SELECTED_SLICE_ANIMATION_DURATION = 750;

class ArtyChartyDonut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t: 0,
      rotation: new Animated.Value(0),
      scale: new Animated.Value(0),
      selectedSlice: null
    };
    this.spring = new Spring({friction: 5, frequency: 200});
    this.spring2 = new Spring({friction: 5, frequency: 100});
  }

  componentWillMount() {
    this._computeChartData();
    //this.props.max ? this.sum = this.props.max : this.sum = this._computeSum();
    this.slices = [];
    this.props.data.data.forEach((d1, idx1) => {
      let startAngle = 0;
      if (d1.r > this.maxR) {
        this.maxR = d1.r;
      }
      let sum = computeChartSum(d1);
      d1.data.forEach((d, idx) => {
        let arcLength = d.value/sum*360;
        let endAngle = startAngle + arcLength;
        this.slices.push({
            startAngle: startAngle,
            arcLength: arcLength,
            dataSetIdx: idx1,
            pointIdx: idx
        });
        startAngle = endAngle;
      });
    });
    this.animateChartTweener = new Tweener(CHART_GROW_ANIMATION_DURATION, t => {
        this.setState({t});
    }, EasingFunctions.bounce, false);
  }

  componentDidMount() {
     Animated.parallel([
      Animated.timing(
      this.state.rotation,
      {
        toValue: 360,
        duration: 2000
      }
    ),
    Animated.timing(
      this.state.scale,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.bounce
      }
    )
    ]).start();
    this._animateChart();
    this._initClickHandler();
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
    this.animateChartTweener.stop();
  }

  _computeChartData() {
    this.maxR = 0;
    if (this.props.data.stackInnerRadius && this.props.data.stackOutterRadius) {
      let gap = this.props.data.gap || 0;
      this.strokeWidth = ((this.props.data.stackOutterRadius - this.props.data.stackInnerRadius)
      / this.props.data.data.length) - gap;
      this.props.data.data.forEach((d, idx) => {
        // Only set radius if not explictly set:
        if (!d.hasOwnProperty('r')) {
          let r = this.props.data.stackInnerRadius + this.strokeWidth * idx + gap * idx;
          if (r > this.maxR) {
            this.maxR = r;
          }
          d.r = r;
        }
      });
    }
  }

  _onLayout(layout) {
    this.layout = layout.nativeEvent.layout;
    this.elementCenter = {
      x: layout.nativeEvent.layout.width / 2,
      y: layout.nativeEvent.layout.height / 2
    };
  }

  _initClickHandler() {
    this._responder = 
      {
      onStartShouldSetResponderCapture: (evt) => true,
      onResponderRelease: (evt) => {
        let deltaY = this.elementCenter.y - evt.nativeEvent.locationY;
        let deltaX = this.elementCenter.x - evt.nativeEvent.locationX;
        let angle = Math.atan2(deltaX, deltaY) * 180 / Math.PI;
        angle < 0 ? angle = Math.abs(angle) : angle = 360 - angle;
        let clickedSlice;
        let distFromCenter = Math.sqrt(Math.pow(this.elementCenter.x - evt.nativeEvent.locationX,2) + Math.pow(this.elementCenter.y - evt.nativeEvent.locationY,2));
        this.slices.some((d, idx) => {
          let ro2 = this.props.data.data[d.dataSetIdx].r/2;
          //console.log(angle, d.startAngle, d.endAngle, ro2, distFromCenter);
          if ((d.startAngle <= angle && angle <= d.startAngle + d.arcLength)
            && (ro2 - this.strokeWidth <= distFromCenter && distFromCenter <= ro2)) {
            clickedSlice = idx;
            return true;
          }
        });
        this.setState({
          selectedSlice: clickedSlice
        });
        if (this.props.onSliceClick) {
          this.props.onSliceClick(this.slices[clickedSlice].dataSetIdx, this.slices[clickedSlice].pointIdx);
        }
      }
    }
  }

  _animateChart() {
    this.animateChartTweener.resetAndPlay();
  }

  render() {
    let size = this.maxR;
    let r = size * .5;
    let donutSlices = this.slices.map((d, idx) => {
      return <Path key={idx}
          d={makeArc(r, r,this.props.data.data[d.dataSetIdx].r/2 * .9, d.startAngle, d.startAngle + EasingFunctions.bounce(this.state.t) * (d.arcLength-1e-12), false)}
          stroke={this.props.data.data[d.dataSetIdx].data[d.pointIdx].color}
          strokeWidth={this.state.selectedSlice === idx ? this.strokeWidth + 5 : this.strokeWidth/2}
          fill="transparent"
           />;
    });
    return(
      <Animated.View
      onLayout={this._onLayout.bind(this)}
      ref="donutchart"
      {...this._responder}
       style={[{
         overflow: 'visible',
        transform: [{rotate: this.state.rotation.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
          })}, {scale: this.state.scale}]
      },this.props.style]}>
        <Svg width={size} height={size} style={{overflow: 'visible'}} >
          {donutSlices}
        </Svg>
      </Animated.View>
    );
  }
}

export default ArtyChartyDonut;
