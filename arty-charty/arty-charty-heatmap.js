import React, {Component} from 'react';
import {
  Dimensions,
  View
} from 'react-native';
import Svg,{
    Defs,
    G,
    LinearGradient,
    Path,
    Stop
} from 'react-native-svg';
import { inerpolateColors } from '.';

class ArtyChartyHeatmap extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let flattened = this.props.data.reduce(function (p, c) {
      return p.concat(c);
    });
    let min = Math.min.apply(null, flattened);
    let max = Math.max.apply(null, flattened);

    this.grid = [];
    this.width = this.props.width || Dimensions.get('window').width;
    let cellSize = this.width / this.props.data[0].length;
    let x, y = 0, item;
    this.props.data.forEach((row, rIdx) => {
      x = 0;
      row.forEach((col, cIdx) => {
        this.grid.push(<Path key={rIdx + '-' + cIdx} fill={this._getColor(col, min, max)} d={`M${x} ${y} H${x+ cellSize} V${y+ cellSize} H${x}`} />);
        x += cellSize;
      });
      y += cellSize;
    });
    this.height = y;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.props = nextProps;
      this._computeChartConstants();
    }
  }

  _getColor(val, min, max) {
    return inerpolateColors(this.props.highColor, this.props.lowColor, (val - min) / max);
  }

  render() {
    return (
        <View style={this.props.style} >
          <Svg width={this.width} height={this.height}>
            {this.grid}
        </Svg>
        </View>
    );
  }
}

export default ArtyChartyHeatmap;
