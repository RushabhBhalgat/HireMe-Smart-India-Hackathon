import React, { useState, useEffect } from "react";
import { Button, Tabs } from "flowbite-react";
import questionsData from "./CNCprogrammer.json";

const ExamInterface = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState([]);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (
        questionsData &&
        questionsData.question &&
        questionsData.question.length > 0
      ) {
        setQuestions(questionsData.question);
      } else {
        setError("No questions found in the data");
      }
    } catch (err) {
      setError("Error loading questions: " + err.message);
    } finally {
      setIsLoading(false);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const toggleMarkForReview = (questionIndex) => {
    setMarkedForReview((prev) =>
      prev.includes(questionIndex)
        ? prev.filter((i) => i !== questionIndex)
        : [...prev, questionIndex]
    );
  };

  const getQuestionStatus = (index) => {
    if (markedForReview.includes(index)) return "review";
    if (answers[index] !== undefined) return "attempted";
    return "not-attempted";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion]?.fields;

  if (!currentQuestionData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">No question data available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div>Time Left: {formatTime(timeLeft)}</div>
        <div className="text-center">
          Technical Test
          <span className="ml-2 bg-orange-400 px-2 py-1 rounded text-sm">
            CNC Programmer
          </span>
        </div>
        <Button color="light">Submit</Button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-4 grid grid-cols-4 gap-4 px-4">
        {/* Questions and Options Section */}
        <div className="col-span-3">
          <div className="mb-4 border-b border-gray-200">
            <Tabs>
              <Tabs.Item title="All Questions" active={true} />
              <Tabs.Item title="CNC Basics" />
              <Tabs.Item title="Tool Handling" />
            </Tabs>
          </div>

          <div className="bg-white rounded-lg shadow">
            {/* Question Text */}
            <div className="p-6 border-b">
              <h2 className="text-xl mb-4">Question {currentQuestion + 1}</h2>
              <p className="text-gray-700">
                {currentQuestionData.question_text}
              </p>
            </div>

            {/* Options Section - Now with max height and scroll */}
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="grid gap-3">
                {["A", "B", "C", "D"].map((option) => (
                  <div
                    key={option}
                    className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors
                      ${
                        answers[currentQuestion] === option
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      }`}
                    onClick={() =>
                      setAnswers({ ...answers, [currentQuestion]: option })
                    }
                  >
                    <div className="flex items-start">
                      <span className="font-medium min-w-[24px]">
                        {option}.
                      </span>
                      <span className="ml-2">
                        {currentQuestionData[`option_${option.toLowerCase()}`]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Question Review Panel */}
        <div className="bg-white rounded-lg shadow p-4 h-fit">
          <h3 className="mb-4 font-medium">Question Overview</h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, i) => (
              <button
                key={i}
                className={`w-10 h-10 rounded-full text-center transition-colors
                  ${
                    getQuestionStatus(i) === "review"
                      ? "bg-purple-500 text-white"
                      : getQuestionStatus(i) === "attempted"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                onClick={() => setCurrentQuestion(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between">
        <div className="space-x-2">
          <Button
            color="purple"
            onClick={() => toggleMarkForReview(currentQuestion)}
          >
            Mark for Review
          </Button>
          <Button
            color="red"
            onClick={() =>
              setAnswers((prev) => {
                const newAnswers = { ...prev };
                delete newAnswers[currentQuestion];
                return newAnswers;
              })
            }
          >
            Clear Response
          </Button>
          <Button color="blue">Bookmark</Button>
          <Button color="warning">Report</Button>
        </div>
        <div>
          <Button
            color="success"
            onClick={() =>
              setCurrentQuestion((prev) =>
                prev < questions.length - 1 ? prev + 1 : prev
              )
            }
          >
            Save & Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;
