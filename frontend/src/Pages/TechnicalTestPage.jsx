import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
function TechnicalTestPage() {
  return (
    <div className="max-w-sm mx-auto mt-10">
      <Card
        imgAlt="Example image"
        imgSrc="https://source.unsplash.com/random/400x300"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          CNC Programmer
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          This is a sample test for the CNC Programmer skill. This is MCQ based.
        </p>
        <Link to="/attempt-tech-test">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Start Test
          </button>
        </Link>
      </Card>
    </div>
  );
}

export default TechnicalTestPage;
