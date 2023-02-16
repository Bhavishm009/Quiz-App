import React, { useState } from 'react'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";

function Topic5() {
  const nevigate = useNavigate();
    const questions = [
        {
          questionText: "What percentage of the human body is water?",
          answerOptions: [
            { answerText: "75%", isCorrect: true },
            { answerText: "30%", isCorrect: false },
            { answerText: "45%", isCorrect: false },
            { answerText: "39%", isCorrect: false },
          ],
        },
        {
          questionText: "The smallest bones in the human body are found in the... ?",
          answerOptions: [
            { answerText: "Feet", isCorrect: false },
            { answerText: "Ears", isCorrect: true },
            { answerText: "Nose", isCorrect: false },
            { answerText: "Hands", isCorrect: false },
          ],
        },
        {
          questionText: "What is the largest organ of the human body?",
          answerOptions: [
            { answerText: "Legs", isCorrect:false},
            { answerText: "Spinal Chord", isCorrect: false },
            { answerText: "Skin", isCorrect: true },
            { answerText: "Hands", isCorrect: false },
          ],
        },
        {
          questionText: "Which of the following aquatic animals does not have gills ?",
          answerOptions: [
            { answerText: "Octopus", isCorrect: false },
            { answerText: "Squid", isCorrect: false },
            { answerText: "Clown Fish", isCorrect: false },
            { answerText: "Whale", isCorrect: true },
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
              You scored {score} out of {questions.length}
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

export default Topic5;
