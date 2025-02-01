import { useState } from "react";
import Question from "../components/Question";
import StartQuiz from "../components/StartQuiz";
import Header from "../components/Header";
import "../styles/Quiz.css";

const Quiz = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIsAnswered, setCurrentQuestionIsAnswered] =
    useState(false);

  const onStart = () => setQuizStarted(true);

  const handleAnswer = (e, isCorrect) => {
    e.target.style.color = "white";
    e.target.style.backgroundColor = isCorrect ? "green" : "crimson";
    if (isCorrect) setScore(score + 1);
    setCurrentQuestionIsAnswered(true);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  const handleQuestionChange = () => {
    setCurrentQuestionIsAnswered(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const endQuiz = () => setCurrentQuestionIndex(quizData.questions.length + 1);

  return (
    <>
      <Header />
      <div className="quiz">
        {currentQuestionIndex >= quizData.questions.length ? (
          <div className="quiz-summary">
            <h2>Quiz Completed!</h2>
            <p>
              Your Score: {score} / {quizData.questions.length}
            </p>
            <button onClick={handleRestart}>Try Again?</button>
          </div>
        ) : quizStarted ? (
          <Question
            question={quizData.questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            handleQuestionChange={handleQuestionChange}
            isAnswered={currentQuestionIsAnswered}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={quizData.questions.length}
            endQuiz={endQuiz}
          />
        ) : (
          <StartQuiz onStart={onStart} />
        )}
      </div>
    </>
  );
};

export default Quiz;
