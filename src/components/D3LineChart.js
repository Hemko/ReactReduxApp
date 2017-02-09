import React from 'react';
import * as d3 from 'd3';

class D3LineChart extends React.Component {

  render () {
    var data=[
      {day:'02-11-2016',count:180},
      {day:'02-12-2016',count:250},
      {day:'02-13-2016',count:150},
      {day:'02-14-2016',count:496},
      {day:'02-15-2016',count:140},
      {day:'02-16-2016',count:380},
      {day:'02-17-2016',count:100},
      {day:'02-18-2016',count:150}
    ];

    var margin = {top: 5, right: 50, bottom: 20, left: 50},
      w = this.props.width - (margin.left + margin.right),
      h = this.props.height - (margin.top + margin.bottom);

    var parseDate = d3.timeParse("%m-%d-%Y");

    data.forEach(function (d) {
      d.date = parseDate(d.day);
    });
    return <svg ref="svg" width={this.props.width} height={this.props.height}>
    </svg>;
  }
}

export default D3LineChart;
