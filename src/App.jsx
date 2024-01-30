import { useState } from 'react'
import Checkbox from './components/Checkbox/Checkbox';
import Radio from './components/Radio/Radio';
import Dropdown from './components/Dropdown/Dropdown';
import Question from './components/Question';
import Start from './components/Start';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Checkbox label = "Happy label"/>

      <Radio id="si" label="si" name="option"/>
      <Radio id="no" label="no" name="option"/>
      <Dropdown title="Menu" options={['one', 'two']}/>
      <Question quizName="Mi quiz" questionTitle="¿Quién inventó la rueda?"/>
      <Start title="SomeTitle" intro="some intro"/>
    </>
  )
}

export default App
