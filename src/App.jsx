import { useState } from 'react'
import Checkbox from './components/Checkbox/Checkbox';
import Radio from './components/Radio/Radio';
import Dropdown from './components/Dropdown/Dropdown';
import Question from './components/Question';
import Quiz from './components/Quiz';
import Start from './components/Start';
import './App.css'
import quizData from './questions/questions.json';

function App() {
  const {title, intro, quizImage, quizInstructions, questionList } = quizData;
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
    <>
      {
        start ? <Quiz title = {title} questions={questions} updateAnswer={updateAnswer}/> : 
        <Start title={title} instructions = {quizInstructions} intro= {intro} onStart = {startQuiz}/>
      }
    </>
  )
}

export default App
