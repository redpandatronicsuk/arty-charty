/**
 * From:
 *  https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
 */
const colorNames = {
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  "azure": "#f0ffff",
  "beige": "#f5f5dc",
  "bisque": "#ffe4c4",
  "black": "#000000",
  "blanchedalmond": "#ffebcd",
  "blue": "#0000ff",
  "blueviolet": "#8a2be2",
  "brown": "#a52a2a",
  "burlywood": "#deb887",
  "cadetblue": "#5f9ea0",
  "chartreuse": "#7fff00",
  "chocolate": "#d2691e",
  "coral": "#ff7f50",
  "cornflowerblue": "#6495ed",
  "cornsilk": "#fff8dc",
  "crimson": "#dc143c",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgoldenrod": "#b8860b",
  "darkgray": "#a9a9a9",
  "darkgreen": "#006400",
  "darkgrey": "#a9a9a9",
  "darkkhaki": "#bdb76b",
  "darkmagenta": "#8b008b",
  "darkolivegreen": "#556b2f",
  "darkorange": "#ff8c00",
  "darkorchid": "#9932cc",
  "darkred": "#8b0000",
  "darksalmon": "#e9967a",
  "darkseagreen": "#8fbc8f",
  "darkslateblue": "#483d8b",
  "darkslategray": "#2f4f4f",
  "darkslategrey": "#2f4f4f",
  "darkturquoise": "#00ced1",
  "darkviolet": "#9400d3",
  "deeppink": "#ff1493",
  "deepskyblue": "#00bfff",
  "dimgray": "#696969",
  "dimgrey": "#696969",
  "dodgerblue": "#1e90ff",
  "firebrick": "#b22222",
  "floralwhite": "#fffaf0",
  "forestgreen": "#228b22",
  "fuchsia": "#ff00ff",
  "gainsboro": "#dcdcdc",
  "ghostwhite": "#f8f8ff",
  "gold": "#ffd700",
  "goldenrod": "#daa520",
  "gray": "#808080",
  "green": "#008000",
  "greenyellow": "#adff2f",
  "grey": "#808080",
  "honeydew": "#f0fff0",
  "hotpink": "#ff69b4",
  "indianred": "#cd5c5c",
  "indigo": "#4b0082",
  "ivory": "#fffff0",
  "khaki": "#f0e68c",
  "lavender": "#e6e6fa",
  "lavenderblush": "#fff0f5",
  "lawngreen": "#7cfc00",
  "lemonchiffon": "#fffacd",
  "lightblue": "#add8e6",
  "lightcoral": "#f08080",
  "lightcyan": "#e0ffff",
  "lightgoldenrodyellow": "#fafad2",
  "lightgray": "#d3d3d3",
  "lightgreen": "#90ee90",
  "lightgrey": "#d3d3d3",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightseagreen": "#20b2aa",
  "lightskyblue": "#87cefa",
  "lightslategray": "#778899",
  "lightslategrey": "#778899",
  "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0",
  "lime": "#00ff00",
  "limegreen": "#32cd32",
  "linen": "#faf0e6",
  "magenta": "#ff00ff",
  "maroon": "#800000",
  "mediumaquamarine": "#66cdaa",
  "mediumblue": "#0000cd",
  "mediumorchid": "#ba55d3",
  "mediumpurple": "#9370db",
  "mediumseagreen": "#3cb371",
  "mediumslateblue": "#7b68ee",
  "mediumspringgreen": "#00fa9a",
  "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585",
  "midnightblue": "#191970",
  "mintcream": "#f5fffa",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "navy": "#000080",
  "oldlace": "#fdf5e6",
  "olive": "#808000",
  "olivedrab": "#6b8e23",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "orchid": "#da70d6",
  "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98",
  "paleturquoise": "#afeeee",
  "palevioletred": "#db7093",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "peru": "#cd853f",
  "pink": "#ffc0cb",
  "plum": "#dda0dd",
  "powderblue": "#b0e0e6",
  "purple": "#800080",
  "rebeccapurple": "#663399",
  "red": "#ff0000",
  "rosybrown": "#bc8f8f",
  "royalblue": "#4169e1",
  "saddlebrown": "#8b4513",
  "salmon": "#fa8072",
  "sandybrown": "#f4a460",
  "seagreen": "#2e8b57",
  "seashell": "#fff5ee",
  "sienna": "#a0522d",
  "silver": "#c0c0c0",
  "skyblue": "#87ceeb",
  "slateblue": "#6a5acd",
  "slategray": "#708090",
  "slategrey": "#708090",
  "snow": "#fffafa",
  "springgreen": "#00ff7f",
  "steelblue": "#4682b4",
  "tan": "#d2b48c",
  "teal": "#008080",
  "thistle": "#d8bfd8",
  "tomato": "#ff6347",
  "turquoise": "#40e0d0",
  "violet": "#ee82ee",
  "wheat": "#f5deb3",
  "white": "#ffffff",
  "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00",
  "yellowgreen": "#9acd32"
};

/**
 * =====================================================
 * ================== SVG FUNCTIONS ====================
 * =====================================================
 */
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function makeArc(x, y, radius, startAngle, endAngle, closePath){

    let start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
  

    let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    let d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y];
  if (closePath) {
    d.push('L');
    d.push(x);
    d.push(y);
    d.push('Z');
  }
    return d.join(" ");    
}

function makeSpline(x,y,px1,py1,px2,py2,x2,y2)
{
  return `C ${px1} ${py1} ${px2} ${py2} ${x2} ${y2}`;
}

function makeCircle(cx, cy, r) {
  return `M${cx - r},${cy}a${r},${r} 0 1,0 ${r * 2},0a${r},${r} 0 1,0 -${r * 2},0`;
}

/**
 * From:
 *   https://www.particleincell.com/wp-content/uploads/2012/06/bezier-spline.js
 */
function computeSplineControlPoints(K)
{
	p1=[];
	p2=[];
	n = K.length-1;
	
	/*rhs vector*/
	a=[];
	b=[];
	c=[];
	r=[];
	
	/*left most segment*/
	a[0]=0;
	b[0]=2;
	c[0]=1;
	r[0] = K[0]+2*K[1];
	
	/*internal segments*/
	for (i = 1; i < n - 1; i++)
	{
		a[i]=1;
		b[i]=4;
		c[i]=1;
		r[i] = 4 * K[i] + 2 * K[i+1];
	}
			
	/*right segment*/
	a[n-1]=2;
	b[n-1]=7;
	c[n-1]=0;
	r[n-1] = 8*K[n-1]+K[n];
	
	/*solves Ax=b with the Thomas algorithm (from Wikipedia)*/
	for (i = 1; i < n; i++)
	{
		m = a[i]/b[i-1];
		b[i] = b[i] - m * c[i - 1];
		r[i] = r[i] - m*r[i-1];
	}
 
	p1[n-1] = r[n-1]/b[n-1];
	for (i = n - 2; i >= 0; --i)
		p1[i] = (r[i] - c[i] * p1[i+1]) / b[i];
		
	/*we have p1, now compute p2*/
	for (i=0;i<n-1;i++)
		p2[i]=2*K[i+1]-p1[i+1];
	
	p2[n-1]=0.5*(K[n]+p1[n-1]);
	
	return {p1:p1, p2:p2};
}

/**
   * Generate the SVG path for a bar chart.
   * 
   * @param  {object}  chart             The chart object
   * @param  {number}  width             Width of the chart in pixels
   * @param  {number}  t                 Scale parameter (range: 0-1), used for 
   *                                     animating the graph
   * @param  {number}  maxValue          The maximum value of chart data
   * @param  {number}  chartHeight       Height of the chart in pixels
   * @param  {number}  chartHeightOffset By how much to offset the chart height.
   *                                     Note: The negation of this number is as
   *                                           the marginTop for the component.
   *                                           This is done so when the graph is
   *                                           animated, overflow is not cut off.
   * @param  {number}  markerRadius      Radius of the markers on the line (only needed to calcualte the height scaler and keep it consistent with the line/area chart, refactor for better name!!!)
   * @param  {number}  pointsOnScreen    The number of points to show on the screen
   *                                     without having to scroll. Used to calculate
   *                                     the horizontal spacing between points. (maybe find better name????)
   */
function makeBarsChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen, paddingLeft, isRange) {
    let heightScaler = (chartHeight-markerRadius)/maxValue;
    let xSpacing = width / pointsOnScreen;
    let barWidth = xSpacing - paddingLeft;
    let fullWidth = paddingLeft/2 + (paddingLeft+barWidth) * (chart.data.length-1) + barWidth;
    let pathStr = []
    let barCords = [];
    let x1, y1, y2;
    chart.data.some((d, idx) => {
        x1 = paddingLeft/2 + (paddingLeft+barWidth) * idx;
        if (x1 > fullWidth * t && chart.drawChart) {
          return true;
        }
        if (chart.stretchChart) {
          x1 = x1 * t;
        }
        y1 = (chartHeight+chartHeightOffset) - d.value * heightScaler * (chart.timingFunctions ? chart.timingFunctions[idx % chart.timingFunctions.length](t) : 1);
        y2 = isRange ? (chartHeight+chartHeightOffset) - d.valueLow * heightScaler * (chart.timingFunctions ? chart.timingFunctions[idx % chart.timingFunctions.length](t) : 1) : (chartHeight+chartHeightOffset);
        pathStr.push('M');
        pathStr.push(x1);
        pathStr.push(y2);
        pathStr.push('H');
        pathStr.push(x1 + barWidth);
        pathStr.push('V');
        pathStr.push(y1);
        pathStr.push('H');
        pathStr.push(x1);
        pathStr.push('V');
        pathStr.push(y2);
        barCords.push({x1: x1, x2: x1+barWidth, y1: y1, y2: y2});
    });
    return {
      path: pathStr.join(' '),
      width: fullWidth,
      maxScroll: fullWidth - width,
      barCords: barCords
    };
  }

  // Make like candle-stick, where each stck is its own Shape
  function makeStackedBarsChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen, paddingLeft, yAxisWidth, isRange) {
    let heightScaler = (chartHeight-markerRadius)/maxValue;
    width = width - yAxisWidth;
    let xSpacing = width / pointsOnScreen;
    let barWidth = xSpacing - paddingLeft;
    let fullWidth = paddingLeft/2 + (paddingLeft+barWidth) * (chart.data.length-1) + barWidth;
    let paths = []
    let barCords = [];
    let x1, y1, y2;
    chart.data.some((d, idx) => {
        x1 = paddingLeft/2 + (paddingLeft+barWidth) * idx + yAxisWidth;
        if (x1 > fullWidth * t && chart.drawChart) {
          return true;
        }
        if (chart.stretchChart) {
          x1 = x1 * t;
        }
        let prevY = 0;
        d.forEach((stack) => {
          y1 = (chartHeight+chartHeightOffset) - (stack.value+prevY) * heightScaler * (chart.timingFunctions ? chart.timingFunctions[idx % chart.timingFunctions.length](t) : 1);
          //y2 = isRange ? (chartHeight+chartHeightOffset) - prevY * heightScaler * (chart.timingFunctions ? chart.timingFunctions[idx % chart.timingFunctions.length](t) : 1) : (chartHeight+chartHeightOffset);
          y2 = isRange ? (chartHeight+chartHeightOffset) - prevY * heightScaler * (chart.timingFunctions ? chart.timingFunctions[idx % chart.timingFunctions.length](t) : 1) : (chartHeight+chartHeightOffset);
          prevY += stack.value;
          paths.push({path: makeBarPath(x1, y1, y2, barWidth), color: stack.color});
          barCords.push({x1: x1, x2: x1+barWidth, y1: y1, y2: y2});
          });
    });
    return {
      //path: pathStr.join(' '),
      path: paths,
      width: fullWidth,
      maxScroll: fullWidth - width,
      barCords: barCords
    };
  }

  function makeBarPath(x1, y1, y2, width) {
    return `M${x1} ${y2} H${x1 + width} V${y1} H${x1} V${y2}`;
  }

  function makeBars3DChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen, paddingLeft, yAxisWidth) {
    let barWidth = width / (chart.data.length) / chart.data[0].length;
    let heightScaler = (chartHeight - barWidth/2*(chart.data[0].length))/maxValue;
    width = width - yAxisWidth;
    let fullWidth = width;
    let paths = []
    let barCords = [];
    let x1, y1, y2;

    const leftMargin = 10;
    const columnWidth = barWidth * .75 * chart.data[0].length + barWidth;
    const barGap = barWidth * .75 * chart.data[0].length;
    let bottomOfsetRow = chartHeight + chartHeightOffset;
    const rowGap = barWidth;

    let verticalGap = barWidth/2;
    let pointIdx = 0;
    let doBreak = false;
    chart.data.some((col, colIdx) => {
      col.some((row, rowIdx) => {
        let y1 = row.value*heightScaler * (chart.timingFunctions ? chart.timingFunctions[colIdx % chart.timingFunctions.length](t) : 1);
        let y2 = bottomOfsetRow - verticalGap * rowIdx;
        let rowSideShift = barWidth * .75 * rowIdx;
        let x1 = leftMargin + columnWidth * colIdx + rowSideShift;
        if (x1 > fullWidth * t && chart.drawChart) {
          doBreak = true;
          return true;
        }
        let bar3d = make3dBar(
           x1,
           y2,
           barWidth,
           y1,
        );
        bar3d.mainColor = row.color;
        bar3d.sideColor = lightenColor(row.color, .2);
        bar3d.topColor = lightenColor(row.color, .4);
        bar3d.pointIdx = pointIdx++;
        paths.unshift(bar3d);
        barCords.push({x1: x1, x2: x1+barWidth+barWidth/2, y1: y2 - y1-barWidth/2, y2: y2});
      });
      if (doBreak) {
          return true;
        }
    });
    return {
      path: paths,
      width: fullWidth,
      maxScroll: width,
      barCords: barCords
    };
  }

  function make3dBar(x, y, width, height) {
    let hw = width/2;
    return {
      main: `M${x} ${y} H${x+width} V${y-height} H${x} Z`,
      side: `M${x+width} ${y} L${x+width+hw} ${y-hw} V${y-height-hw} L${x+width} ${y-height} V${y} Z`,
      top: `M${x+hw} ${y-hw-height} H${x+width+hw} L${x+width} ${y-height} H${x} Z`
    };
  }

  function makeCandlestickChart(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen, paddingLeft) {
    let heightScaler = (chartHeight-markerRadius)/maxValue;
    let xSpacing = width / pointsOnScreen;
    let barWidth = xSpacing - paddingLeft;
    let fullWidth = paddingLeft/2 + (paddingLeft+barWidth) * (chart.data.length-1) + barWidth;
    let paths = [];
    let barCords = [];
    chart.data.some((d, idx) => {
        let candle = makeCandlestickPath(d, idx, chart, t, heightScaler, barWidth, fullWidth, chartHeight, chartHeightOffset, paddingLeft);
        paths.push(candle);
        barCords.push(candle.barCords);
    });
    return {
      paths: paths,
      width: fullWidth,
      maxScroll: fullWidth - width,
      barCords: barCords
    };
  }

  function makeCandlestickPath(d, idx, chart, t, heightScaler, barWidth, fullWidth, chartHeight, chartHeightOffset, paddingLeft) {
        let x1 = paddingLeft/2 + (paddingLeft+barWidth) * idx;
        let openHigherThanClose = d.open > d.close;
        let pathStr = [];
        let top = openHigherThanClose ? d.open : d.close;
        let bottom = openHigherThanClose ? d.close : d.open;
        let tScaled = chart.timingFunctions ? chart.timingFunctions[idx % chart.timingFunctions.length](t) : 1;
        if (x1 > fullWidth * t && chart.drawChart) {
          return true;
        }
        if (chart.stretchChart) {
          x1 = x1 * t;
        }
        let y1 = (chartHeight+chartHeightOffset) - top * heightScaler * tScaled;
        let y2 = (chartHeight+chartHeightOffset) - bottom * heightScaler * tScaled;
        let yLow = (chartHeight+chartHeightOffset) - d.low * heightScaler * tScaled;
        let yTop = (chartHeight+chartHeightOffset) - d.high * heightScaler * tScaled;
        pathStr.push(`M${x1} ${y2} H${x1+barWidth} V${y1} H${x1} V${y2} M${x1 + barWidth / 2} ${yLow} V${y2} M${x1 + barWidth / 2} ${yTop} V${y1}`);
    return {
      //openHigherThanClose, pathStr, barCords: {x1: x1, x2: x1+barWidth, y1: y1, y2: y2}
      openHigherThanClose, pathStr: pathStr.join(' '), barCords: {x1: x1, x2: x1+barWidth, y1: yTop, y2: yLow}
    };
  }

  /**
   * Common function used by line/spline/area charts to compute
   * the next X coordinate when generating the chart SVG path.
   */
  function makeXcord(chart, fullWidth, t, spacing, markerRadius) {
    if (chart.drawChart) {
          return Math.min(fullWidth * t, spacing + markerRadius);
        } else if (chart.stretchChart) {
          return t * (spacing + markerRadius);
        } else {
          return spacing + markerRadius;
        }
  }

  /**
   * Wrapper function for makeLineOrAreaChartPath to make a line chart.
   */
  function makeAreaChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen) {
    return makeLineOrAreaChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen, true, false);
  }

  function makeAreaRangeChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen) {
    return makeLineOrAreaChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen, true, true);
  }

  /**
   * Wrapper function for makeLineOrAreaChartPath to make an area chart.
   */
  function makeLineChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen) {
    return makeLineOrAreaChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen, false, false);
  }

  /**
   * Generate the SVG path for a line or area chart.
   * 
   * @param  {object}  chart             The chart object
   * @param  {number}  width             Width of the chart in pixels
   * @param  {number}  t                 Scale parameter (range: 0-1), used for 
   *                                     animating the graph
   * @param  {number}  maxValue          The maximum value of chart data
   * @param  {number}  chartHeight       Height of the chart in pixels
   * @param  {number}  chartHeightOffset By how much to offset the chart height.
   *                                     Note: The negation of this number is as
   *                                           the marginTop for the component.
   *                                           This is done so when the graph is
   *                                           animated, overflow is not cut off.
   * @param  {number}  markerRadius      Radius of the markers on the line (needed here so we can add it to the width of the chart element, maybe change name to something better such as padding!!!!)
   * @param  {number}  pointsOnScreen    The number of points to show on the screen
   *                                     without having to scroll. Used to calculate
   *                                     the horizontal spacing between points. (maybe find better name????)
   * @param  {boolean} makeArea          Wether to close the line (make it an
   *                                     area chart) or not.
   */
  function makeLineOrAreaChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen, makeArea, isRange) {
    let heightScaler = (chartHeight-markerRadius)/maxValue;
    let xSpacing = width / pointsOnScreen;
    let centeriser = xSpacing / 2 - markerRadius;
    let fullWidth = xSpacing*(chart.data.length-1) + markerRadius + centeriser;

    let lineStrArray = makeArea && !isRange ? ['M' + markerRadius, chartHeight+chartHeightOffset] : [];
    if (isRange) {
      lineStrArray.push('M');
      lineStrArray.push(makeXcord(chart, fullWidth, t, centeriser, markerRadius));
      lineStrArray.push((chartHeight+chartHeightOffset) - chart.data[0].value * heightScaler  * (chart.timingFunctions ? chart.timingFunctions[0 % chart.timingFunctions.length](t) : 1)); 
    }
    let xCord;
    let lowCords = [];
    chart.data.some((d, idx) => {
    let spacing = idx*xSpacing + centeriser;
        if (spacing > fullWidth * t && chart.drawChart) {
          return true;
        }
        xCord = makeXcord(chart, fullWidth, t, spacing, markerRadius);
        // Move line to to next x-coordinate:
        lineStrArray.push((idx > 0 || makeArea ? 'L' : 'M') + xCord);
        // And y-cordinate:
        let yCord = (chartHeight+chartHeightOffset) - d.value * heightScaler  * (chart.timingFunctions ? chart.timingFunctions[idx % chart.timingFunctions.length](t) : 1);
        lineStrArray.push(yCord);
        if (isRange) {
          let yCordLow = (chartHeight+chartHeightOffset) - d.valueLow * heightScaler  * (chart.timingFunctions ? chart.timingFunctions[idx % chart.timingFunctions.length](t) : 1);
          lowCords.unshift({xCord, yCordLow});
        }
    });
    if (makeArea) {
      if (isRange) {
        lowCords.forEach((d) => {
          lineStrArray.push('L' + d.xCord);
          lineStrArray.push(d.yCordLow);
        });
        // lineStrArray.push('L' + makeXcord(chart, fullWidth, t, xSpacing + centeriser, markerRadius));
        // lineStrArray.push(d.yCordLow);
      } else {
        lineStrArray.push('L' + xCord);
        lineStrArray.push(chartHeight + chartHeightOffset);
      }
      lineStrArray.push('Z');
    }
    return {
      path: lineStrArray.join(' '),
      width: xCord + markerRadius,
      maxScroll: fullWidth - xSpacing + markerRadius
    };
  }

  function makeLineStepChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen) {
    let heightScaler = (chartHeight-markerRadius)/maxValue;
    let xSpacing = width / pointsOnScreen;
    let fullWidth = xSpacing*(chart.data.length-1) + markerRadius;
    let lineStrArray = [
          'M0',
          (chartHeight+chartHeightOffset) - chart.data[0].value * heightScaler  * (chart.timingFunctions ? chart.timingFunctions[0 % chart.timingFunctions.length](t) : 1)
      ];
    let idx, xCord, yCord;
    for (idx = 0; idx < chart.data.length-1; idx++) {
      xCord = (idx+1)*xSpacing;
      if (xCord > fullWidth * t && chart.drawChart) {
        break;
      }
      lineStrArray.push('H' + xCord);
      yCord = (chartHeight+chartHeightOffset) - chart.data[idx+1].value * heightScaler  * (chart.timingFunctions ? chart.timingFunctions[idx % chart.timingFunctions.length](t) : 1);
      lineStrArray.push('V' + yCord);
    }
    lineStrArray.push('H' + chart.data.length*xSpacing);
    return {
      path: lineStrArray.join(' '),
      width: xCord + markerRadius,
      maxScroll: fullWidth - xSpacing + markerRadius
    };
  }

  /**
   * Generate the SVG path for a spline or spline-area chart.
   * 
   * @param  {object}  chart             The chart object
   * @param  {number}  width             Width of the chart in pixels
   * @param  {number}  t                 Scale parameter (range: 0-1), used for 
   *                                     animating the graph
   * @param  {number}  maxValue          The maximum value of chart data
   * @param  {number}  chartHeight       Height of the chart in pixels
   * @param  {number}  chartHeightOffset By how much to offset the chart height.
   *                                     Note: The negation of this number is as
   *                                           the marginTop for the component.
   *                                           This is done so when the graph is
   *                                           animated, overflow is not cut off.
   * @param  {number}  markerRadius      Radius of the markers on the line (needed here so we can add it to the width of the chart element, maybe change name to something better such as padding!!!!)
   * @param  {number}  pointsOnScreen    The number of points to show on the screen
   *                                     without having to scroll. Used to calculate
   *                                     the horizontal spacing between points. (maybe find better name????)
   * @param  {boolean} closePath         Wether to close the spline (make it an
   *                                     area chart) or not.
   */
  function makeSplineChartPath(chart, width, t, maxValue, chartHeight, chartHeightOffset, markerRadius, pointsOnScreen, closePath) {
    let heightScaler = (chartHeight-markerRadius)/maxValue;
    let xSpacing = width / pointsOnScreen;
    let centeriser = xSpacing / 2 - markerRadius;
    let fullWidth = xSpacing*(chart.data.length-1) + markerRadius + centeriser;

    let xCord;
    let xCords = [];
    let yCords = [];
    chart.data.forEach((d, idx) => {
        let spacing = idx*xSpacing + centeriser;
        if (spacing > fullWidth * t && chart.drawChart) {
          return true;
        }
        xCord = makeXcord(chart, fullWidth, t, spacing, markerRadius);
        xCords.push(xCord);
        yCords.push((chartHeight+chartHeightOffset) - d.value * heightScaler  * (chart.timingFunctions ? chart.timingFunctions[idx % chart.timingFunctions.length](t) : 1));
    });
    let px = computeSplineControlPoints(xCords);
	  let py = computeSplineControlPoints(yCords);
    let splines = [`M ${xCords[0]} ${yCords[0]}`];
      for (i=0;i<xCords.length-1;i++) {
        splines.push(makeSpline(xCords[i],yCords[i],px.p1[i],py.p1[i],px.p2[i],py.p2[i],xCords[i+1],yCords[i+1]));
      }
      if (closePath) { // close for area spline graph
        splines.push(`V ${chartHeight+chartHeightOffset} H ${xCords[0]} Z`);
      }
    return {
      path: splines.join(','),
      width: xCords.slice(-1) + markerRadius,
      maxScroll: fullWidth - xSpacing + markerRadius
    };
  }

/**
 * =====================================================
 * ================ COLOUR FUNCTIONS ===================
 * =====================================================
 * Note for more look here: http://www.easyrgb.com/index.php?X=MATH
 */

/**
 * Compute the RGB component value for the provided
 * HSL parameters.
 * 
 * @param  {number}  p  lumanence and saturation parameter 1
 * @param  {number}  q  lumanence and saturation parameter 2
 * @param  {number}  t  The hue value
 */
function hue2rgb(p, q, t){
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
  }

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 * 
 * (From:
 *  http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion)
 */
function hslToRgb(h, s, l){
    var r, g, b;
    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function hslaToRgba(h, s, l, a) {
  return [...hslToRgb(h,s,l), a];
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @return  {Array}           The HSL representation
 * 
 * (From:
 *  http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion)
 */
function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h, s, l];
}

/**
 * Converts a RGBA colour to HSLA.
 */
function rgbaToHsla(h, s, l, a) {
  return [...rgbToHsl(h,s,l), a];
}

/**
 * Parse a colour CSS colour string and return a RGBA object.
 * NOTE: There is already a similar function built into React
 * Native -> check if that can be used instead!
 */
function parseColor(col) {
  let tmp;
  if (typeof col === 'string') {
    col = col.trim();
    if (col.slice(0,1) === '#') {
      if (col.length === 7) {
        return {
          r: parseInt('0x' + col.substr(1,2)),
          g: parseInt('0x' + col.substr(3,2)),
          b: parseInt('0x' + col.substr(5,2)),
          a: 1
        };
      } else if (col.length === 4) {
        return {
          r: Math.pow(parseInt('0x' + col.substr(1,1))+1,2)-1,
          g: Math.pow(parseInt('0x' + col.substr(2,1))+1,2)-1,
          b: Math.pow(parseInt('0x' + col.substr(3,1))+1,2)-1,
          a: 1
        };
      } else if (col.length === 9) {
        return {
          r: parseInt('0x' + col.substr(1,2)),
          g: parseInt('0x' + col.substr(3,2)),
          b: parseInt('0x' + col.substr(5,2)),
          a: parseInt('0x' + col.substr(7,2)) / 255
        };
      } else if (col.length === 5) {
        return {
          r: Math.pow(parseInt('0x' + col.substr(1,1))+1,2)-1,
          g: Math.pow(parseInt('0x' + col.substr(2,1))+1,2)-1,
          b: Math.pow(parseInt('0x' + col.substr(3,1))+1,2)-1,
          a: parseInt('0x' + col.substr(4,1)) / 15
        };
      }
    } else if (col.slice(0,4) === 'rgba') {
      tmp = col.substr(5).split(',');
      return {
        r: parseInt(tmp[0]),
        g: parseInt(tmp[1]),
        b: parseInt(tmp[2]),
        a: parseFloat(tmp[3])
      };
    } else if (col.slice(0,4) === 'hsla') {
      tmp = col.substr(5).split(',').slice(0,4);
      tmp[0] = tmp[0] / 359;
      tmp[1] = tmp[1].slice(0,-1) / 100;
      tmp[2] = tmp[2].slice(0,-2) / 100;
      tmp = hslaToRgba(...tmp);
      return {
        r: tmp[0],
        g: tmp[1],
        b: tmp[2],
        a: parseFloat(tmp[3])
      };
    } else if (col.slice(0,3) === 'rgb') {
      tmp = col.substr(4).split(',');
      return {
        r: parseInt(tmp[0]),
        g: parseInt(tmp[1]),
        b: parseInt(tmp[2]),
        a: 1
      };
    } else if (col.slice(0,3) === 'hsl') {
      tmp = col.substr(4).split(',').slice(0,3);
      tmp[0] = tmp[0] / 359;
      tmp[1] = tmp[1].slice(0,-1) / 100;
      tmp[2] = tmp[2].slice(0,-2) / 100;
      tmp = hslToRgb(...tmp);
      return {
        r: tmp[0],
        g: tmp[1],
        b: tmp[2],
        a: 1
      };
    } else if (col.slice(0,2) === '0x') {
      return {
          r: parseInt('0x' + col.substr(2,2)),
          g: parseInt('0x' + col.substr(4,2)),
          b: parseInt('0x' + col.substr(6,2)),
          a: parseInt('0x' + col.substr(8,2)) / 255
        };
    } else if (col === 'transparent') {
      return {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        };
    } else if (colorNames.hasOwnProperty(col)) {
      return parseColor(colorNames[col]);
    }
  }
}

function RGBobj2string(obj) {
  return `rgba(${Math.round(obj.r)},${Math.round(obj.g)},${Math.round(obj.b)},${obj.a.toFixed(3)})`;
}

/**
 * Interpolate two colours (including alpha value).
 */
function inerpolateColors(col1, col2, amount) {
  let col1rgb = parseColor(col1);
  let col2rgb = parseColor(col2);
  return RGBobj2string({
    r: Math.min(255, col1rgb.r * amount + col2rgb.r * (1-amount)),
    g: Math.min(255, col1rgb.g * amount + col2rgb.g * (1-amount)),
    b: Math.min(255, col1rgb.b * amount + col2rgb.b * (1-amount)),
    a: Math.min(1, col1rgb.a * amount + col2rgb.a * (1-amount))
  });
}

/**
 * Interpolate two colours and set the alpha value.
 */
function inerpolateColorsFixedAlpha(col1, col2, amount, alpha) {
  let col1rgb = parseColor(col1);
  let col2rgb = parseColor(col2);
  return RGBobj2string({
    r: Math.min(255, col1rgb.r * amount + col2rgb.r * Math.max(0,1-amount)),
    g: Math.min(255, col1rgb.g * amount + col2rgb.g * Math.max(0,1-amount)),
    b: Math.min(255, col1rgb.b * amount + col2rgb.b * Math.max(0,1-amount)),
    a: alpha
  });
}

/**
 * Shade the colour by the given amount.
 */
function shadeColor(col, amount) {
  let col1rgb = parseColor(col);
  return RGBobj2string({
    r: Math.min(255, col1rgb.r * amount + 0 * Math.max(0,1-amount)),
    g: Math.min(255, col1rgb.g * amount + 0 * Math.max(0,1-amount)),
    b: Math.min(255, col1rgb.b * amount + 0 * Math.max(0,1-amount)),
    a: col1rgb.a
  });
}

/**
 * Tint the colour by the given amount.
 */
function tintColor(col, amount) {
  let col1rgb = parseColor(col);
  return RGBobj2string({
    r: Math.min(255, col1rgb.r * amount + 255 * Math.max(0,1-amount)),
    g: Math.min(255, col1rgb.g * amount + 255 * Math.max(0,1-amount)),
    b: Math.min(255, col1rgb.b * amount + 255 * Math.max(0,1-amount)),
    a: col1rgb.a
  });
}

/**
 * Increase colour lightness by the given amount.
 */
function lightenColor(col, amount) {
  let colRgba = parseColor(col);
  let colHsla = rgbaToHsla(colRgba.r, colRgba.g, colRgba.b, colRgba.a);
  colRgba = hslaToRgba(colHsla[0],colHsla[1],Math.min(Math.max(colHsla[2]+amount, 0), 1),colHsla[3]);
  return RGBobj2string({
    r: colRgba[0],
    g: colRgba[1],
    b: colRgba[2],
    a: colRgba[3]
  });
}

/**
 * Increase colour saturation by the given amount.
 */
function saturateColor(col, amount) {
  let colRgba = parseColor(col);
  let colHsla = rgbaToHsla(colRgba.r, colRgba.g, colRgba.b, colRgba.a);
  colRgba = hslaToRgba(colHsla[0],Math.min(Math.max(colHsla[1]+amount, 0), 1), colHsla[2],colHsla[3]);
  return RGBobj2string({
    r: colRgba[0],
    g: colRgba[1],
    b: colRgba[2],
    a: colRgba[3]
  });
}

/**
 * Hue shift colour by a given amount.
 */
function hueshiftColor(col, amount) {
  let colRgba = parseColor(col);
  let colHsla = rgbaToHsla(colRgba.r, colRgba.g, colRgba.b, colRgba.a);
  colRgba = hslaToRgba((hsl[0] + amount) % 1, colHsla[1], colHsla[2],colHsla[3]);
  return RGBobj2string({
    r: colRgba[0],
    g: colRgba[1],
    b: colRgba[2],
    a: colRgba[3]
  });
}

/**
 * Compute the complement of a given colour.
 * It converts the input colour to HSL and then
 * shifts the hue by 180°. Doesn't give the same
 * complement colour as using the colour wheel,
 * but still a good enough complement colour.
 */
function complement(color) {
  let rgb = parseColor(color);
  let hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  hsl[0] = (hsl[0] + .5) % 1;
  hsl[2] = 1 - hsl[2];
  return hslToRgb(...hsl);
}

/**
 * Find minimum and maximum value in an array of numbers
 */
function getMinMaxValues(arr) {
    let maxValue = Number.MIN_VALUE;
    let minValue = Number.MAX_VALUE;
    arr
      .forEach((d) => {
        if (d.value > maxValue) {
          maxValue = d.value;
        }
        if (d.value < minValue) {
          minValue = d.value;
        }
      });
      return {maxValue, minValue};
  }

  /**
 * Find minimum and maximum value in an array of numbers
 */
function getMinMaxValuesRange(arr) {
    let maxValue = Number.MIN_VALUE;
    let minValue = Number.MAX_VALUE;
    arr
      .forEach((d) => {
        if (d.value > maxValue) {
          maxValue = d.value;
        }
        if (d.valueLow < minValue) {
          minValue = d.valueLow;
        }
      });
      return {maxValue, minValue};
  }

/**
 * Find maximum stacksum
 */
function getMaxSumStack(arr) { //here!!!
    let maxValue = Number.MIN_VALUE;
    arr
      .forEach((d) => {
        let stackSum = computeArrayValueSum(d);
        if (stackSum > maxValue) {
          maxValue = stackSum;
        }
      });
      return maxValue;
  }

  function getMaxSumBars3d(arr) {
    let maxValue = Number.MIN_VALUE;
    arr.forEach(column => {
      column.forEach(bar => {
        if (bar.value > maxValue) {
          maxValue = bar.value;
        }
      });
    });
    return maxValue;
  }

  /**
 * Find minimum and maximum X and Y values in an array of
 * XY coordinate objects
 */
function getMinMaxValuesXY(arr) {
    let maxValueX = Number.MIN_VALUE;
    let maxValueY = Number.MIN_VALUE;
    let minValueX = Number.MAX_VALUE;
    let minValueY = Number.MAX_VALUE;
    arr
      .forEach((d) => {
        if (d.x > maxValueX) {
          maxValueX = d.x;
        }
        if (d.x < minValueX) {
          minValueX = d.x;
        }
        if (d.y > maxValueY) {
          maxValueY = d.y;
        }
        if (d.y < minValueY) {
          minValueY = d.y;
        }
      });
      return {maxValueX, minValueX, maxValueY, minValueY};
  }

  /**
 * Find minimum and maximum value in an array of candlestick objects
 */
function getMinMaxValuesCandlestick(arr) {
    let maxValue = Number.MIN_VALUE;
    let minValue = Number.MAX_VALUE;
    arr
      .forEach((d) => {
        if (d.high > maxValue) {
          maxValue = d.high;
        }
        if (d.low < minValue) {
          minValue = d.low;
        }
      });
      return {maxValue, minValue};
  }

  function  computeChartSum(chart) {
    return computeArrayValueSum(chart.data);
    // return chart.data.reduce((a,b) => { 
    //   return a + b.value;
    // },0);
  }

  function  computeArrayValueSum(arr) {
    return arr.reduce((a,b) => { 
      return a + b.value;
    },0);
  }

   /**
   * Find the index of the rectangle that contains a given
   * coordinate.
   * @param {array} points - Array of rectangles, each rectangle is of the form
   *                         {x1: number, x2: number, y1: number, y2: number},
   *                         where x1 and x2 are the minimum and maximum x coordinates
   *                         and y1 and y3 are the minimum and maximum x coordinates.
   * @param {number} x     - The x coordinate
   * @param {number} y     - The y coordinate
   */
  function findRectangleIndexContainingPoint(rectangles, x, y) {
    let closestIdx;
    rectangles.some((d, idx) => {
      if ((d.x1 <= x && x <= d.x2) && (d.y1 <= y && y <= d.y2)) {
        closestIdx = idx;
        return true;
      }
      return false;
    });
    return closestIdx;
  }

  /**
   * Find the index of the closest coordinate to a
   * reference coordinate in an array of coordinates.
   * If no point is found within the threshold distance
   * undefined is returned.
   */
  function findClosestPointIndexWithinRadius(points, x, y, radiusThreshold) {
    let closestIdx;
    let closestDist = Number.MAX_VALUE;
    points.forEach((d, idx) => {
      let distSqrd = Math.pow(d.x - x, 2) + Math.pow(d.y - y, 2); // changeto: (d.x - x)**2 + (d.y - y)**2;
      if (distSqrd < closestDist && distSqrd < radiusThreshold) {
        closestIdx = idx;
        closestDist = distSqrd;
      }
    });
    return closestIdx;
  }

export { 
  polarToCartesian,
  makeArc,
  inerpolateColors,
  inerpolateColorsFixedAlpha,
  lightenColor,
  saturateColor,
  hueshiftColor,
  tintColor,
  shadeColor,
  complement,
  computeSplineControlPoints,
  makeCircle,
  makeSpline,
  getMinMaxValues,
  getMinMaxValuesXY,
  getMinMaxValuesCandlestick,
  getMinMaxValuesRange,
  computeChartSum,
  findRectangleIndexContainingPoint,
  findClosestPointIndexWithinRadius,
  makeBarsChartPath,
  makeAreaChartPath,
  makeLineChartPath,
  makeSplineChartPath,
  makeCandlestickChart,
  makeAreaRangeChartPath,
  makeLineStepChartPath,
  makeStackedBarsChartPath,
  makeBars3DChartPath,
  getMaxSumStack,
  getMaxSumBars3d
 }