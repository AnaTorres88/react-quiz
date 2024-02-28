import {useState, useContext} from 'react';
import { QuizContext } from '../../App';
import { updateAnswers, updateCheckboxAnswer}  from '../../helpers/updateAnswers';


export default function Checkbox({label, checked, name, index, ...props}){
  const defaultChecked = checked ? checked : false;
  const [questions, setQuestions] = useContext(QuizContext);
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const selected = [];

    const handleCheck = (e) => {
      const checked = e.target.name;

      // selected.push(checked);
      setIsChecked((prev) => !prev);
      // console.log(selected);
      updateCheckboxAnswer(checked, index, questions, setQuestions);
    }
    return (
          <div className="checkboxContainer">
            <label>
                <input type="checkbox"
                value={label}
                checked={isChecked}
                name={name}
                onChange={handleCheck }
                {...props}
                >
                </input>
                <span>{label}</span>
            </label>
          </div>
    );
}