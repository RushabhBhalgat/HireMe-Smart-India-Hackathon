import React from "react";
import ProjectCard from "../../components/DashboardComponents/ProjectCard";
import ImprovementChart from "../../components/DashboardComponents/ImprovementChart";
import Cal1 from "../../components/DashboardComponents/Cal1";
import PersonalityChart from "../../components/DashboardComponents/PersonalityChart";
// import PerformanceDistribution from "../../components/DashboardComponents/PerformanceDistributionChart";

const projects = [
  {
    name: "Programming",
    type: "G-code programming",
    date: "2021-01-01",
    members: ["G-code programming", "M-code programming", "CAM software usage"],
    files: 65,
    progress: 3,
  },
  {
    name: "Machining",
    type: "CAD (Computer-Aided Design)",
    date: "2020-01-01",
    members: [
      "Lathe operation",
      "Milling machine operation",
      "CNC machine setup",
    ],
    files: 35,
    progress: 4,
  },
  {
    name: "Design Software",
    type: "CAD (Computer-Aided Design)",
    date: "2022-01-01",
    members: ["CAD (Computer-Aided Design)", "SolidWorks", "AutoCAD"],
    files: 75,
    progress: 2,
  },
  {
    name: "Quality Assurance",
    type: "Blueprint reading",
    date: "2019-01-01",
    members: [
      "Blueprint reading",
      "Precision measurement tools",
      "Quality inspection",
    ],
    files: 10,
    progress: 5,
  },
  {
    name: "Soft Skills",
    type: "Problem-solving",
    date: "2018-01-01",
    members: ["Problem-solving", "Attention to detail", "Team collaboration"],
    files: 45,
    progress: 6,
  },
];

const Home = () => {
  return (
    <div className="p-5">
      {/* Charts Section */}
      <div className="space-y-8">
        {/* First row - Improvement and Personality Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-[500px] bg-white rounded-lg shadow-lg">
            <ImprovementChart />
          </div>
          <div className="w-full h-[500px] bg-white rounded-lg shadow-lg">
            <PersonalityChart />
          </div>
        </div>

        {/* Second row - Calendar and Future Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-[500px] bg-white rounded-lg shadow-lg">
            <Cal1 />
          </div>
          <div className="w-full h-[500px] bg-white rounded-lg shadow-lg">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {/* <PerformanceDistribution /> */}
              </h2>
            </div>
            <div className="flex-1 h-[calc(500px-66px)] flex items-center justify-center text-gray-500"></div>
          </div>
        </div>
      </div>

      {/* Current Skills Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Current Skills</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects &&
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
