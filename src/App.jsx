import { useState, useContext, createContext } from 'react'
import Quiz from './components/Quiz';
import Start from './components/Start';
import './App.css'
import quizData from './questions/questions.json';
const {title, intro, quizImage, quizInstructions, questionList } = quizData;
export const QuizContext = createContext(questionList);

function App() {
  
  const [ questions, setQuestions ] = useState(questionList);
  const [start, setStart ] = useState(false);

  const startQuiz = () => {
    setStart(true);
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

  return (
    <QuizContext.Provider value={[questions, setQuestions]}>
      <>
        {
          start ? <Quiz title = {title} questions={questions} updateAnswer={updateAnswer}/> : 
          <Start title={title} instructions = {quizInstructions} intro= {intro} onStart = {startQuiz}/>
        }
        {JSON.stringify(questions)}
      </>
    </QuizContext.Provider>
  )
}

export default App
