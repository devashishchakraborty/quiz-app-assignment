import "../styles/Question.css";
import ReactMarkdown from "react-markdown";
import CountdownTimer from "./CountdownTimer";

const Question = ({
  question,
  onAnswer,
  handleQuestionChange,
  isAnswered,
  currentQuestionIndex,
  totalQuestions,
  endQuiz,
}) => {
  return (
    <div className="questionContainer">
      <CountdownTimer initialTime={15 * 60} endQuiz={endQuiz} />
      <div className="question" isAnswered={isAnswered.toString()}>
        <h3>
          Q{currentQuestionIndex + 1}. {question.description}
        </h3>
        <ul>
          {question.options.map((option) => (
            <li key={option.id}>
              <button onClick={(event) => onAnswer(event, option.is_correct)}>
                {option.description}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isAnswered ? (
        <div className="questionSolution">
          <ReactMarkdown>{question.detailed_solution}</ReactMarkdown>
        </div>
      ) : null}
      <button className="nextQues" onClick={handleQuestionChange}>
        {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Question;
