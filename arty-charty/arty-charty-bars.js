import React, {Component} from 'react';
import {
  ART
} from 'react-native';
const {Shape} = ART;

class ArtyChartyBars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let chartData = this.makeBarsChartPath(chart, width, this.state.t);
    chart.barCords = chartData.barCords;
    //this.maxScroll = Math.max(this.maxScroll, chartData.maxScroll || 0);
            
    return (
        <Shape
            key={idx + 20000} 
            d={chartData.path}
            stroke={chart.lineColor || "rgba(255,255,255,.5)"}
            strokeWidth={3}
            fill={new LinearGradient(
            this.makeGradStops(chart.maxValue, idx),
          0,
          0,
          chartData.width,
          0
      )} />
    );
  }
}

export default ArtyChartyBars;
