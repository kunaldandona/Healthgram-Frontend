import React, { Component } from "react";
import createClass from "create-react-class";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const CustomizedLabel = createClass({
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text
        x={x}
        y={y}
        dy={-14}
        fill={stroke}
        fontSize={20}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  }
});

const CustomizedAxisTick = createClass({
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={20} textAnchor="middle" fill="#666">
          {payload.value}
        </text>
      </g>
    );
  }
});

class SimpleLineChart extends Component {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={this.props.data}>
          <XAxis dataKey="year" tick={<CustomizedAxisTick />} />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <CartesianGrid horizontal={false} /> */}
          <Line
            type="monotone"
            dataKey="cases"
            stroke="#0079FF"
            dot={{ stroke: "#0079FF", strokeWidth: 6 }}
            activeDot={{ stroke: "#0079FF", strokeWidth: 4, r: 8 }}
            label={<CustomizedLabel />}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default SimpleLineChart;
