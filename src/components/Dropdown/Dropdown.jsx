import { useContext, useState } from 'react';
import { QuizContext } from '../../QuizRenderer';
import { updateAnswers}  from '../../helpers/updateAnswers';
export default function Dropdown({title, index, options,...props}){
  const [questions, setQuestions] = useContext(QuizContext);
  const [ selectedOption, setSelectedOption] = useState(title)
    const selectAnswer = (option, index) => {
      setSelectedOption(option);
      updateAnswers(option, index, questions, setQuestions);
    }
    return (
      <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        { selectedOption ? selectedOption : title}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, idx) =><li key={idx}>
          <a className="dropdown-item" href="#" onClick = {() => selectAnswer(option, index)} >{option}</a>
          </li>)}
      </ul>
    </div>

    );
}