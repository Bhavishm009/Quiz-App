import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'
function Topic2() {
  const nevigate = useNavigate();
    const questions = [
        {
          questionText: "Which is the shortcut command to copy files?",
          answerOptions: [
            { answerText: "CTRL+Z", isCorrect:false},
            { answerText: "CTRL+Y", isCorrect: false },
            { answerText: "CTRL+C", isCorrect: true },
            { answerText: "CTRL+D", isCorrect: false },
          ],
        },
        {
          questionText: "Which company/organisation develop windows?",
          answerOptions: [
            { answerText: "Microsoft", isCorrect: true },
            { answerText: "Google", isCorrect: false },
            { answerText: "Apple", isCorrect: false },
            { answerText: "Infosys", isCorrect: false },
          ],
        },
        {
          questionText: "In computer world,Trojan refer to?",
          answerOptions: [
            { answerText: "Virus", isCorrect: false },
            { answerText: "Malware", isCorrect: true },
            { answerText: "Worm", isCorrect: false },
            { answerText: "Spyware", isCorrect: false },
          ],
        },
        {
          questionText: "A computer uses which type of number system to calculate and to store data?",
          answerOptions: [
            { answerText: "Deciaml", isCorrect: false },
            { answerText: "Octa", isCorrect: false },
            { answerText: "HexaDeciaml", isCorrect: false },
            { answerText: "Binary", isCorrect: true },
          ],
        },{
          questionText: "what is ram?",
          answerOptions: [
            { answerText: "read only data", isCorrect:false},
            { answerText: "read only value", isCorrect: false },
            { answerText: "read only memory", isCorrect: true },
            { answerText: "read only computer", isCorrect: false },
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
          { score >= 6 ? (
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

export default Topic2
