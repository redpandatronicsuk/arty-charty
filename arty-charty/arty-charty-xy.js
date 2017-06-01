import React, {Component} from 'react';
import {
  Dimensions,
  Responder,
  View
} from 'react-native';
import Svg,{
    Defs,
    G,
    LinearGradient,
    Path,
    Stop,
    Text
} from 'react-native-svg';
import {Spring,EasingFunctions} from '../timing-functions';
import {makeArc, Tweener, getMinMaxValuesXY, makeCircle} from '.';

const CHART_GROW_ANIMATION_DURATION = 3000;
const CHART_PADDING = 1;
const CHART_HEIGHT = 300;
const Y_AXIS_WIDTH = 50;

class ArtyChartyXY extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t: this.props.animated === true ? 0 : 1,
      clickedPointIdx: -1
    };
    this.spring = new Spring({friction: 25, frequency: 200});
  }

  componentWillMount() {
   this._computeChartDimensions();
   this._makeXaxis();
   this._makeYaxis();
   if (this.props.animated) {
     this.animateChartTweener = new Tweener(CHART_GROW_ANIMATION_DURATION, t => {
        this.setState({t});
    }, this.spring.interpolate.bind(this.spring), false);
   }
   this._initPanHandler();
  }

  componentDidMount() {
    if (this.props.animated) {
      this.animateChartTweener.resetAndPlay();
    }
  }

  // componentWillReceiveProps(nextProps) {
  // }

  componentWillUnmount() {
  }

  _computeChartDimensions() {
    // Get min and max XY values and add padding
    this.minMaxs = getMinMaxValuesXY(this.props.data);
    this.chartWidth = this.minMaxs.maxValueX - this.minMaxs.minValueX + CHART_PADDING * 2;
    this.chartHeight = this.minMaxs.maxValueY - this.minMaxs.minValueY + CHART_PADDING * 2;
    this.widthScaler = (this.props.width || Dimensions.get('window').width) / this.chartWidth;
    this.heightScaler = (this.props.height || CHART_HEIGHT) / this.chartHeight;
    // Add a little padding to the viewbox, so animation overflow is visbile
    this.viewBox = `${this.minMaxs.minValueX - CHART_PADDING} ${this.minMaxs.minValueY * 2 + CHART_PADDING*4} ${this.chartWidth + this.chartWidth*.5} ${this.chartHeight + this.chartHeight*.5}`;
  }

  _makeXaxis() {
    let numXticks = 5;
    let stepSize = (this.minMaxs.maxValueX - this.minMaxs.minValueX) / numXticks;
    let ticks = Array.from(Array(numXticks)).map((d, idx) => {
      let x = (this.minMaxs.minValueX + (stepSize * idx));
      return (
        <G key={idx}>
        <Path stroke="black" strokeWidth={1} d={`M ${x * this.widthScaler + Y_AXIS_WIDTH} ${this.minMaxs.maxValueY * this.heightScaler+ CHART_PADDING} V ${this.minMaxs.maxValueY * this.heightScaler+ CHART_PADDING + 3}`} />
        {this.props.showGrid ? <Path stroke="gray" strokeDash={[0, 0, 4, 6]}strokeDash={[0, 0, 4, 6]} strokeWidth={1} d={`M ${x * this.widthScaler + Y_AXIS_WIDTH} ${this.minMaxs.maxValueY * this.heightScaler+ CHART_PADDING} V 0`} /> : null}
        <Text alignment="center" fill="black" x={x * this.widthScaler + Y_AXIS_WIDTH} y={this.minMaxs.maxValueY * this.heightScaler+ CHART_PADDING} fontSize="16" fontFamily="Arial">{x.toFixed(2)}</Text>
        </G>
        );
    });
    this.xAxis = (<G>
      <Path stroke="black" strokeWidth={1} d={`M ${CHART_PADDING + Y_AXIS_WIDTH} ${this.minMaxs.maxValueY * this.heightScaler + CHART_PADDING} H ${this.minMaxs.maxValueX * this.widthScaler + Y_AXIS_WIDTH}`} />
      {ticks}
    </G>);
  }

 _makeYaxis() {
    let numYticks = 5;
    let stepSize = (this.minMaxs.maxValueY - this.minMaxs.minValueY) / numYticks;
    let ticks = Array.from(Array(numYticks+1)).map((d, idx) => {
    let y = (this.minMaxs.minValueY + (stepSize * idx));
      return (
        <G key={idx}>
        <Path stroke="black" strokeWidth={1} d={`M ${Y_AXIS_WIDTH} ${y* this.heightScaler} H ${Y_AXIS_WIDTH-5}`} />
        {this.props.showGrid ? <Path stroke="gray" strokeWidth={1} strokeDash={[0, 0, 4, 6]} d={`M ${Y_AXIS_WIDTH} ${y* this.heightScaler} H ${Y_AXIS_WIDTH + this.chartWidth * this.widthScaler}`} /> : null}
      <Text alignment="right" fill="black" x={Y_AXIS_WIDTH-5} y={y * this.heightScaler - 10} fontSize="16" fontFamily="Arial">{(this.minMaxs.maxValueY-y).toFixed(2)}</Text>
        </G>
        );
    });
    this.yAxis = (<G>
      <Path stroke="black" strokeWidth={1} d={`M ${CHART_PADDING + Y_AXIS_WIDTH} ${CHART_PADDING} V ${this.minMaxs.maxValueY * this.heightScaler + CHART_PADDING}`} />
      {ticks}
    </G>);
  }

  _initPanHandler() {
    this._responder = 
      {
      onStartShouldSetResponderCapture: (evt) => true,
      onResponderRelease: (evt) => {
        this.props.data.some((d, idx) => {
            if (Math.sqrt(Math.pow((d.x * this.widthScaler + CHART_PADDING + Y_AXIS_WIDTH) - evt.nativeEvent.locationX, 2) + Math.pow(((this.minMaxs.maxValueY - d.y) * this.heightScaler + CHART_PADDING) - evt.nativeEvent.locationY, 2) < d.value * this.heightScaler)) {
            this.setState({
              clickedPointIdx: idx
            });
            if (this.props.onPointClick) {
                this.props.onPointClick(idx);
            }
            return true;
          }
        });
      }
    }
  }

  render() {
    let width = this.props.width || Dimensions.get('window').width;
    let height = this.props.height || CHART_HEIGHT;
    let scaleFn = this.props.type === 'scatter' ? () => {return this.props.pointRadius ? this.props.pointRadius : 1 * this.state.t} : (d) => {return d * this.state.t};
    points = this.props.data.map((d, idx) => {
      return <Path key={idx} d={makeCircle(d.x * this.widthScaler + CHART_PADDING + Y_AXIS_WIDTH, (this.minMaxs.maxValueY - d.y + this.minMaxs.minValueY) * this.heightScaler + CHART_PADDING, scaleFn(d.value))} 
      fill={d.color || this.props.color || 'black'} stroke="black" strokeWidth={this.state.clickedPointIdx === idx ? 5 : 0} />
    });
    
    return(
      <View
      ref="xychart"
      {...this._responder}
       style={[{overflow: 'visible'}, this.props.style]}
       viewBox={this.viewBox}>
        <Svg width={width} height={height}>
          {points}
          {this.xAxis}
          {this.yAxis}
        </Svg>
      </View>
    );
  }
}

export default ArtyChartyXY;
