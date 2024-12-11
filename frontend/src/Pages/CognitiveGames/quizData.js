// quizData.js
export const quiz = {
    quizTitle: "Spot On Cognitive Game",
    quizSynopsis: "Match the pattern to the correct image.",
    progressBarColor: "#6c5ce7",
    nrOfQuestions: "5", // Total number of questions
    questions: [
      {
        question: "Match the pattern to the correct option.",
        questionType: "photo",
        questionPic: "../../images/cognitive_games/SpotOn/q1target.png", // Target image
        answerSelectionType: "single",
        answers: [
          "../../images/cognitive_games/SpotOn/q1option1.png",
          "../../images/cognitive_games/SpotOn/q1option2.png",
          "../../images/cognitive_games/SpotOn/q1option3.png",
          "../../images/cognitive_games/SpotOn/q1option4.png",    
        ],
        correctAnswer: "4", // Correct option index starts from 1
        point: "10",
      },
      // Add more questions as needed
    ],
  };
  