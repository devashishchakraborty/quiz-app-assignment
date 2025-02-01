import { useEffect, useState } from "react";
import { fetchQuizData } from "./utils/api";
import Quiz from "./pages/Quiz";
import "./App.css";

function App() {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const loadQuizData = async () => {
      const data = await fetchQuizData();
      setQuizData(data);
    };
    loadQuizData();
  }, []);

  if (!quizData) return <div>Loading...</div>;

  return (
    <div className="App">
      <Quiz quizData={quizData} />
    </div>
  );
}

export default App;
