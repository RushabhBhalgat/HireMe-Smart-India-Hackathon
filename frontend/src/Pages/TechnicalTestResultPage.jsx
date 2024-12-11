import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const TechnicalTestResultPage = ({ results }) => {
  const generatePDF = () => {
    s;
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(20);
    doc.text("Exam Results Report", 20, 20);

    // Add score summary
    doc.setFontSize(12);
    doc.text(`Total Score: ${results.score.toFixed(2)}%`, 20, 40);
    doc.text(
      `Questions Attempted: ${results.attempted}/${results.total_questions}`,
      20,
      50
    );
    doc.text(
      `Correct Answers: ${results.correct}/${results.total_questions}`,
      20,
      60
    );

    // Add concept-wise breakdown
    const conceptResults = results.detailed_results.reduce((acc, curr) => {
      acc[curr.concept_tag] = acc[curr.concept_tag] || { total: 0, correct: 0 };
      acc[curr.concept_tag].total++;
      if (curr.is_correct) acc[curr.concept_tag].correct++;
      return acc;
    }, {});

    let yPos = 80;
    doc.text("Concept-wise Performance:", 20, yPos);
    yPos += 10;
    Object.entries(conceptResults).forEach(([concept, data]) => {
      const percentage = ((data.correct / data.total) * 100).toFixed(2);
      doc.text(
        `${concept}: ${percentage}% (${data.correct}/${data.total})`,
        25,
        yPos
      );
      yPos += 10;
    });

    // Add detailed results table
    const tableData = results.detailed_results.map((result, index) => [
      index + 1,
      result.question_text.slice(0, 40) + "...",
      result.selected_option,
      result.correct_option,
      result.concept_tag,
      result.is_correct ? "Correct" : "Incorrect",
    ]);

    doc.autoTable({
      startY: yPos + 10,
      head: [["Q.No", "Question", "Selected", "Correct", "Concept", "Status"]],
      body: tableData,
      margin: { top: 15 },
      styles: { fontSize: 8 },
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 60 },
        2: { cellWidth: 25 },
        3: { cellWidth: 25 },
        4: { cellWidth: 30 },
        5: { cellWidth: 30 },
      },
    });

    doc.save("exam_report.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Exam Results</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Score Summary */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl mb-4 font-semibold">Score Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Score:</span>
                <span className="font-bold text-lg">
                  {results.score.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Questions Attempted:</span>
                <span className="font-bold">
                  {results.attempted}/{results.total_questions}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Correct Answers:</span>
                <span className="font-bold">
                  {results.correct}/{results.total_questions}
                </span>
              </div>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg">
            <PieChart width={200} height={200}>
              <Pie
                data={[
                  { name: "Correct", value: results.correct },
                  {
                    name: "Incorrect",
                    value: results.total_questions - results.correct,
                  },
                ]}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                <Cell fill="#4CAF50" />
                <Cell fill="#f44336" />
              </Pie>
            </PieChart>
            <div className="mt-4 flex gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Correct</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span>Incorrect</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={generatePDF}
          className="mt-8 w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          Download Detailed Report (PDF)
        </button>
      </div>
    </div>
  );
};

export default TechnicalTestResultPage;
