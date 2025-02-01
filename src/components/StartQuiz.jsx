import "../styles/StartQuiz.css";
const StartQuiz = ({ onStart }) => {
  return (
    <div className="start-quiz">
      <h1>Welcome to the Quiz!</h1>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
};

export default StartQuiz;
