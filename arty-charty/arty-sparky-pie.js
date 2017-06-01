import React, {Component} from 'react';
import {
  View
} from 'react-native';
import Svg,{
    Defs,
    G,
    LinearGradient,
    Path,
    Stop
} from 'react-native-svg';
import {Spring,EasingFunctions} from '../timing-functions';
import {makeArc} from '.';

const CHART_GROW_ANIMATION_DURATION = 3000;
const SELECTED_SLICE_ANIMATION_DURATION = 750;

class ArtySparkyPie extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.max ? this.sum = this.props.max : this.sum = this._computeSum();
    this.slices = [];
    let startAngle = 0;
    this.props.data.data.forEach((d, idx) => {
      let arcLength = d.value/this.sum*360;
      let endAngle = startAngle + arcLength;
      let rad = (startAngle + arcLength/2) * Math.PI / 180;
      let vector = {x: Math.sin(rad), y: -Math.cos(rad)};
      this.slices.push({
          startAngle: startAngle,
          arcLength: arcLength,
          vector: vector
      });
      startAngle = endAngle;
    });
  }

  _computeSum() {
    return this.props.data.data.reduce((a,b) => { 
      return a + b.value;
    },0);
  }

  render() {
    let size = this.props.size;
    let r = size * .5;
    let pieSlices = [];
    this.slices.forEach((d, idx) => {
      let cx = r;
      let cy = r;
      pieSlices.push(<Path key={idx}
          d={makeArc(cx, cy,r, d.startAngle, d.startAngle + d.arcLength, true)}
          fill={this.props.data.data[idx].color}
           />);
    });
    return(
      <View
       style={this.props.style}>
        <Svg width={size} height={size} >
          {pieSlices}
        </Svg>
      </View>
    );
  }
}

export default ArtySparkyPie;
