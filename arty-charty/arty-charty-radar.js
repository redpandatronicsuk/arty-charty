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
import {polarToCartesian, computeChartSum, Tweener, makeCircle, findClosestPointIndexWithinRadius, complement} from '.';

const AXIS_TICKS = 5;
const MARKER_RADIUS = 5;
const CHART_GROW_ANIMATION_DURATION = 1500;
const PADDING_TOP = 20;

class ArtyChartyRadar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t: 0,
      path: ''
    };
  }

  componentWillMount() {
    this.computeChartStats();
    this.polarGrid = this.makePolarGrid(AXIS_TICKS);
    this.axisLabel = this.makeAxisLabel(AXIS_TICKS)
    this.initPanHandler();
    this.animateChartTweener = new Tweener(CHART_GROW_ANIMATION_DURATION, t => {
        this.setState({t});
    }, EasingFunctions.easeOutQuint, false);
  }

  componentDidMount() {
    this.animateChartTweener.resetAndPlay();
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
    this.animateChartTweener.stop();
  }

  computeChartStats() {
    this.maxVal = Math.max.apply(null,this.props.data.reduce((a, b) => {return a.concat(b.data);}, []));
    this.size = this.props.size || Dimensions.get('window').width;
    this.center = this.size / 2;
    this.sizeScaler = this.center / this.maxVal;
    this.angleStepSize = 360 / this.props.data[0].data.length;
  }

  makeCoords(data) {
    return coords = data.map((d, idx) => {
      let coords = polarToCartesian(this.center, this.center, d*this.sizeScaler * this.state.t, this.angleStepSize*idx);
      return {
        x: coords.x,
        y: coords.y + PADDING_TOP
      };
    });
  }

  makeChartPath(data) {
    let path = ['M'];
      data.map((d, idx) => {
      path.push(d.x);
      path.push(d.y);
      path.push(idx < this.props.data[0].data.length-1 ? 'L' : 'Z');
      return {
        x: d.x,
        y: d.y
      };
    });
    return path;
  }

  initPanHandler() {
    this._responder = 
      {
      onStartShouldSetResponderCapture: (evt) => true,
      onResponderRelease: (evt) => {
        let clickedMarker, clickedChart;
        this.coords.some((cords, idx) => {
          clickedMarker =
          findClosestPointIndexWithinRadius(cords, evt.nativeEvent.locationX, evt.nativeEvent.locationY, MARKER_RADIUS*2);
          if (clickedMarker > -1) {
            clickedChart = idx;
            return true;
          }
        });
        this.setState({
          selectedMarker: clickedMarker,
          clickedChart: clickedChart
        });
        if (this.props.onMarkerClick) {
          this.props.onMarkerClick(clickedMarker, clickedChart);
        }
      }
    }
  }

  makePolarGrid(num) {
    let i, j, path = [], coords;
    let stepSize = this.center / num;
    for (i = 0; i < num+1; i++) {
      for (j = 0; j < this.props.data[0].data.length; j++) {
        path.push(j > 0 ? 'L' : 'M');
        coords = polarToCartesian(this.center, this.center + PADDING_TOP, stepSize * i, this.angleStepSize*j);
        path.push(coords.x);
        path.push(coords.y);
      }
      path.push('Z');
    }
    for (j = 0; j < this.props.data[0].data.length; j++) {
      path.push('M');
      path.push(this.center);
      path.push(this.center + PADDING_TOP);
      path.push('L');
      coords = polarToCartesian(this.center, this.center + PADDING_TOP, this.center, this.angleStepSize*j);
      path.push(coords.x);
      path.push(coords.y);
    }
    return <Path strokeDash={this.props.gridStrokeDash || []} stroke={this.props.gridColor} strokeWidth={this.props.gridLineWidth || 1} d={path} fill={this.props.fill || 'rgba(0,0,0,.1)'} />
  }

  makeAxisLabel(num) {
    let texts = [];
    let stepSize = this.center / num;
    for (i = 1; i < num+1; i++) {
      texts.push(<Text 
      key={i}
      fill={this.props.gridTextColor || 'black'}
      strokeWidth={.25}
      stroke={complement(this.props.gridTextColor || 'black')}
      font={`${this.props.gridTextSize || 12}px Arial`}
      x={this.center} 
      y={stepSize*(i-1) - (this.props.gridTextSize ? this.props.gridTextSize * .7 : 12) + PADDING_TOP}>
        {'—'+(this.maxVal/num * (num-i+1)).toFixed(2)}
      </Text>);
    }
    return texts;
  }

  makeOuterLabel() {
    let stepSize = this.center / this.props.labels.length;
    let texts = this.props.labels.map((label, j) => {
      let coords = polarToCartesian(this.center, this.center, this.center + (this.props.labelsTextSize*.25 || 12*.25), this.angleStepSize*j + this.angleStepSize/2);
       return (<Text 
            key={j}
            fill={this.props.labelsTextColor || 'black'}
            strokeWidth={.25}
            stroke={complement(this.props.labelsTextColor || 'black')}
            font={`${this.props.labelsTextSize || 12}px Arial`}
            transform={new Transform().rotate(this.angleStepSize*j + this.angleStepSize/2)}
            alignment="center"
            x={coords.x} 
            y={coords.y + PADDING_TOP}>
              {label}
            </Text>);
    });
    return texts;
  }

  render() {
    this.coords = 
    this.props.data.map((d,idx) => {
      return this.makeCoords(d.data);
    });
    let lines = this.coords.map((data, idx) => {
           return (
             <Path key={idx} stroke={this.props.data[idx].lineColor || 'red'} strokeWidth={this.props.data[idx].lineWidth || 3} strokeDash={this.props.data[idx].strokeDash || []} strokeJoin={this.props.data[idx].lineCap || 'square'} strokeCap={this.props.data[idx].lineCap || 'square'} fill={this.props.data[idx].fill || 'rgba(0,255,0,.2)'} d={this.makeChartPath(data)} />
             )
          });
    let markers = this.coords.map((data, idx) => {
           return (
             data.map((d,idx2)=> {
               return <Path key={idx2} fill={this.props.data[idx].markerColor || 'red'}  stroke={this.props.data[idx].markerColor || 'red'} strokeWidth={this.state.clickedChart === idx && this.state.selectedMarker === idx2 ? 8 : 0} d={makeCircle(d.x,d.y,MARKER_RADIUS)} />
             })
             )
          });
    return(
      <View {...this._responder} ref="chart" style={{overflow: 'visible'}}>
        <Svg width={this.size} height={this.size + PADDING_TOP*2} style={{overflow: 'visible'}} >
        {this.polarGrid}
        {lines}
        {markers}
        {this.axisLabel}
        {this.makeOuterLabel()}
        </Svg>
      </View>
    );
  }
}

export default ArtyChartyRadar;
