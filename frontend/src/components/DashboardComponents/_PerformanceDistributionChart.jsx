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
          <RadarChart
            outerRadius="60%"
            data={chartData}
            margin={{ top: 40, right: 40, bottom: 20, left: 40 }}
          >
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
        <div className="grid grid-cols-4 gap-4">
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

const PerformanceDistribution = () => {
  const generateBellCurveData = () => {
    const data = [];
    const mean = 50;
    const stdDev = 15;

    for (let i = 0; i <= 100; i += 2) {
      const x = i;
      const y =
        (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
      data.push({
        percentile: x,
        value: y * 10,
      });
    }
    return data;
  };

  const data = generateBellCurveData();
  const userPercentile = 92;

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">
          Performance Distribution
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          You are in the top {100 - userPercentile}% of performers
        </p>
      </div>
      <div className="flex-1 p-6">
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="percentile"
              label={{
                value: "Percentile",
                position: "bottom",
                offset: -10,
                fontSize: 12,
              }}
              tick={{ fontSize: 11 }}
            />
            <YAxis hide />
            <Tooltip
              formatter={(value) => [
                `Score: ${value.toFixed(2)}`,
                "Distribution",
              ]}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: 12,
              }}
            />
            <ReferenceLine
              x={userPercentile}
              stroke="#4f46e5"
              strokeWidth={2}
              label={{
                value: "Your Position",
                position: "top",
                offset: 15,
                fill: "#4f46e5",
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#818cf8"
              fill="#818cf8"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="mt-4 grid grid-cols-3 gap-3 px-2">
          <div className="text-center p-2 bg-gray-50 rounded-lg shadow-sm">
            <div className="font-semibold text-sm">Below Average</div>
            <div className="text-xs text-gray-500">&lt;30th percentile</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg shadow-sm">
            <div className="font-semibold text-sm">Average</div>
            <div className="text-xs text-gray-500">30th-70th percentile</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg shadow-sm">
            <div className="font-semibold text-sm">Above Average</div>
            <div className="text-xs text-gray-500">&gt;70th percentile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default { PersonalityChart, PerformanceDistribution };
