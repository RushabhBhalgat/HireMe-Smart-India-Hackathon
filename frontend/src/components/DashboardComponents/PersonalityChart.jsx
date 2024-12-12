import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PersonalityChart = ({ data }) => {
  const defaultData = [
    { field: "Analyst", value: 20, fullMark: 100 },
    { field: "Explorer", value: 15, fullMark: 100 },
    { field: "Diplomatic", value: 90, fullMark: 100 },
    { field: "Sentinel", value: 10, fullMark: 100 },
  ];

  const chartData = data || defaultData;

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">
          Personality Profile Analysis
        </h2>
      </div>
      <div className="flex-1 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius={150} data={chartData}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis
              dataKey="field"
              tick={{ fill: "#4b5563", fontSize: 14 }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "#6b7280" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f8f8f8",
                borderRadius: "10px",
                padding: "10px",
              }}
              formatter={(value) => [`${value}%`, "Score"]}
            />
            <Radar
              name="Personality Score"
              dataKey="value"
              stroke="#4f46e5"
              fill="#818cf8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {chartData.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-gray-600 font-medium">{item.field}</p>
              <p className="text-xl font-bold text-indigo-600">{item.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalityChart;
