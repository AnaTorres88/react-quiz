import { useState, useEffect, createContext } from 'react'
import Quiz from './components/Quiz';
import Start from './components/Start';
import Results from './components/Results/Results';
import './App.css'
import quizData from './data/questions.json';
const {title, intro, quizImage, quizInstructions, questionList } = quizData;
export const QuizContext = createContext(questionList);

function App() {
  
  const [ questions, setQuestions ] = useState(questionList);
  const [start, setStart ] = useState(false);
  const [results, setResults ] = useState(false);

  const startQuiz = () => {
    setStart(true);
  }
  const goToResults = () => {
    setResults(true);
  }
  const goToStart = () => {
    setStart(false);
  }
  const restartQuiz =() => {
    setStart(false);
    setResults(false);
    setQuestions(questionList);
  }
  
  const updateAnswer = (index, answer) => {
    const parent ={ ...questionList[index], answer};
    const updatedList = questionList.map((item, i) => {
      if(index===i) {
        item = parent
      }
      return item
    });
   
    setQuestions(updatedList);
  }

  const renderQuiz = () => {
    if(start && results) {
      return (<Results onReset = {restartQuiz} calcType ="round" approved={70}/>)
    } else if (start && !results) {
      return (<Quiz title = {title} questions={questions} updateAnswer={updateAnswer} start = {goToStart} finish={goToResults}/>);
    } else {
  	  return <Start title={title} instructions = {quizInstructions} intro= {intro} onStart = {startQuiz}/>
    }
  }
  return (
    <QuizContext.Provider value={[questions, setQuestions]}>
      <>
        {renderQuiz()}
      </>
    </QuizContext.Provider>
  )
}

export default App
