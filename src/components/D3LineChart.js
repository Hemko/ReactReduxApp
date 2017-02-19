import React from 'react';
import * as d3 from 'd3';

class D3LineChart extends React.Component {

  render () {
    const { transactions } = this.props;

    const style = {
      border: "1px solid black"
    };

    const margin = {top: 20, right: 20, bottom: 30, left: 50},
      w = this.props.width - (margin.left + margin.right),
      h = this.props.height - (margin.top + margin.bottom);

    //const parseDate = d3.timeParse("%m-%d-%Y");

    /*transactions.forEach(function (d) {
      d.date = parseDate(d.day);
    });*/
console.log(transactions);
    const x = d3.scaleTime()
      .domain(d3.extent(transactions, function(d) {
        return d.date;
      }))
      .rangeRound([0, w]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(transactions, function(d) {
        return d.sum;
      })])
      .range([h, 0]);

    const line = d3.line()
      .x(function (d) {
        return x(d.date);
      })
      .y(function (d) {
        return y(d.sum);
      })
      .curve(d3.curveCardinal);

    const transform = "translate(" + margin.left + "," + margin.top + ")";
    //const transformXAxis = "translate(0," + h + ")";

    return <svg ref="svg" width={this.props.width} height={this.props.height} style={style}>
      <g transform={transform}>
        <path className="line" d={line(transactions)} fill="none" stroke="blue" />
      </g>
    </svg>;
  }
}

export default D3LineChart;
