import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import React from "react";

const AirQualityPieChart = ({ aqi, max, rev }) => {
  let color = [];
  if(rev){
    color = aqi => {
      // switch (aqi) {
      if (aqi < max / 4) return ["#f1f1f1", "#E5124F"];
      if (aqi < max / 2) return ["#f1f1f1", "#FF5E62"];
      if (aqi < max / 4 * 3) return ["#f1f1f1", "#FFC371"];
      if (aqi < max) return ["#f1f1f1", "#89e8b0"];
    };
  }else{
    color = aqi => {
      // switch (aqi) {
      if (aqi < max / 4) return ["#f1f1f1", "#89e8b0"];
      if (aqi < max / 2) return ["#f1f1f1", "#FFC371"];
      if (aqi < max / 4 * 3) return ["#f1f1f1", "#FF5E62"];
      if (aqi < max) return ["#f1f1f1", "#E5124F"];
    };
  }


  const data = [
    { name: "Total", value: max - aqi },
    { name: "aqi", value: aqi }
  ];

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="80%"
          startAngle={0}
          endAngle={180}
          innerRadius={100}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={0}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={color(aqi)[index % color(aqi).length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default AirQualityPieChart;
