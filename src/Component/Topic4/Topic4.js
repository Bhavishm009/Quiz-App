import React, { useState} from 'react'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
function Topic4() {
  const nevigate = useNavigate();
    const questions = [
        {
          questionText: "In which Italian city can you find the Colosseum??",
          answerOptions: [
            { answerText: "Rome", isCorrect: true },
            { answerText: "Venice", isCorrect: false },
            { answerText: "Naples", isCorrect: false },
            { answerText: "Milan", isCorrect: false },
          ],
        },
        {
          questionText: "Jeff Bezos was the founder of which billion dollar company? ?",
          answerOptions: [
            { answerText: "Twitter", isCorrect: false },
            { answerText: "Amazon", isCorrect: true },
            { answerText: "Subway", isCorrect: false },
            { answerText: "Tesla", isCorrect: false },
          ],
        },
        {
          questionText: "In 1768, Captain James Cook set out to explore which ocean?",
          answerOptions: [
            { answerText: "Atlantic Ocean", isCorrect:false},
            { answerText: "Indian Ocean", isCorrect: false },
            { answerText: "Pacific Ocean", isCorrect: true },
            { answerText: "Arctic Ocean", isCorrect: false },
          ],
        },
        {
          questionText: "What is actually electricity?",
          answerOptions: [
            { answerText: "A flow of water", isCorrect: false },
            { answerText: "A flow of air", isCorrect: false },
            { answerText: "A flow of atoms", isCorrect: false },
            { answerText: " A flow of electrons", isCorrect: true },
          ],
        },{
          questionText: "how much bone in human body?",
          answerOptions: [
            { answerText: "206", isCorrect: true },
            { answerText: "210", isCorrect: false },
            { answerText: "200", isCorrect: false },
            { answerText: "190", isCorrect: false },
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

export default Topic4
