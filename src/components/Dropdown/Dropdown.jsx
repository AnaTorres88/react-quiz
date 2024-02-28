import { useContext} from 'react';
import { QuizContext } from '../../App';
import { updateAnswers}  from '../../helpers/updateAnswers';
export default function Dropdown({title, options,...props}){
  const [questions, setQuestions] = useContext(QuizContext);
  
    return (
      <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {title}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, index) =><li key={index}>
          <a className="dropdown-item" href="#" onClick = {() => updateAnswers(option, index, questions, setQuestions)} >{option}</a>
          </li>)}
      </ul>
    </div>

    );
}