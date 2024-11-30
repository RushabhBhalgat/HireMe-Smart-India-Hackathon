import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { Card } from '../../components/InterviewComponents/Card';
import { mockQuestions } from '../../Simulationdata/mockData';
import { ChevronLeft, Check, X } from 'lucide-react';

const Interview = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    if (currentQuestion === mockQuestions.length - 1) {
      navigate('/feedback');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-6 h-[calc(100vh-2rem)]">
      <div className="col-span-2 space-y-6">
        <Card className="h-full">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                Question {currentQuestion + 1} of {mockQuestions.length}
              </h2>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {mockQuestions[currentQuestion].topic}
              </span>
            </div>

            <p className="text-lg mb-8">{mockQuestions[currentQuestion].question}</p>

            <div className="mt-auto flex justify-between">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 px-4 py-2 border rounded-md disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="flex gap-4">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  <X className="w-5 h-5" />
                  Skip
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  <Check className="w-5 h-5" />
                  Answer
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="col-span-1">
        <Card className="h-full">
          <h2 className="text-xl font-semibold mb-4">Webcam Preview</h2>
          <Webcam
            audio={false}
            className="w-full rounded-lg"
            mirrored
          />
        </Card>
      </div>
    </div>
  );
};

export default Interview;