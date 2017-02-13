import React from 'react';
import * as d3 from 'd3';

class D3LineChart extends React.Component {

  render () {
    const style = {
      border: "1px solid black"
    };
    
    const data = this.props.data;

    const margin = {top: 20, right: 20, bottom: 30, left: 50},
      w = this.props.width - (margin.left + margin.right),
      h = this.props.height - (margin.top + margin.bottom);

    var parseDate = d3.timeParse("%m-%d-%Y");

    data.forEach(function (d) {
      d.date = parseDate(d.day);
    });

    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) {
        return d.date;
      }))
      .rangeRound([0, w]);

    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) {
        return d.count;
      })])
      .range([h, 0]);

    var line = d3.line()
      .x(function (d) {
        return x(d.date);
      })
      .y(function (d) {
        return y(d.count);
      })
      .curve(d3.curveCardinal);

    var transform = "translate(" + margin.left + "," + margin.top + ")";

    return <svg ref="svg" width={this.props.width} height={this.props.height} style={style}>
      <g transform={transform}>
        <path className="line" d={line(data)} fill="none" stroke="blue" />
      </g>
    </svg>;
  }
}

export default D3LineChart;
