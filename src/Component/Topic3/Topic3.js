import React, { useState } from 'react'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
function Topic3() {
  const nevigate = useNavigate();
    const questions = [
        {
          questionText: "Which hook is used To perform side Effects?",
          answerOptions: [
            { answerText: "useEffect", isCorrect: true },
            { answerText: "useMemo", isCorrect: false },
            { answerText: "useRef", isCorrect: false },
            { answerText: "useCallback", isCorrect: false },
          ],
        },
        {
          questionText: "Props are?",
          answerOptions: [
            { answerText: "Internal Data", isCorrect: false },
            { answerText: "External data", isCorrect: true },
            { answerText: "Memoized data", isCorrect: false },
            { answerText: "None Of the Above", isCorrect: false },
          ],
        },
        {
          questionText: "useRef is a?",
          answerOptions: [
            { answerText: "React Hook", isCorrect: true },
            { answerText: "Custom Hook", isCorrect: false },
            { answerText: "Recoil Hook", isCorrect: false },
            { answerText: "None of the above", isCorrect: false },
          ],
        },
        {
          questionText: "How many types of hooks are there in react?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "5", isCorrect: true },
          ],
        },{
          questionText: "what is useref?",
          answerOptions: [
            { answerText: "functional component", isCorrect: true },
            { answerText: "data", isCorrect: false },
            { answerText: "class component", isCorrect: false },
            { answerText: "useCallback ", isCorrect: false },
          ],
        },{
          questionText: "national flower??",
          answerOptions: [
            { answerText: "lotus", isCorrect: true },
            { answerText: "sunflower", isCorrect: false },
            { answerText: "rose", isCorrect: false },
            { answerText: "chameli", isCorrect: false },
          ],
        },
      ];
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
    
      const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
          swal({
            title: "Good job!",
            text: "Correct Answer",
            icon: "success",
          });

        }
    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
      };
      return (
        <div className="app">
          {showScore ? (
            <div className="score-section">
          {score >= 6 ? (
            <p>
              You are Passed, your score is {score} out of{" "}
              {questions.length * 2}
            </p>
          ) : (
            <p>
              Try again you are Failed, your score is {score} out of{" "}
              {questions.length * 2}
            </p>
          )}
              <button onClick={()=> nevigate("/")}>Go Home</button>
          
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      );
}

export default Topic3
