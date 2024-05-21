import {useContext, useState} from 'react';
import { QuizContext } from '../../QuizRenderer';
import { updateAnswers}  from '../../helpers/updateAnswers';
export default function Radio({label, checked, name, id, updateAnswer, index, ...props}) {
      const [answer, setAnswer] = useState(null);
      const [questions, setQuestions] = useContext(QuizContext);
      const idLower = id.toLowerCase();

      const onChangeRadio = (e) => {
            const answerLower = e.target.value.toLowerCase();
            setAnswer(() => answerLower);
            updateAnswers(e .target.value, index, questions, setQuestions);
      }
    return (
          <div className="radioContainer">
                <input type="radio"
                className="m-1"
                id={idLower}
                name = {name}
                selected={answer === idLower}
                value = {idLower}
                onChange={onChangeRadio}
                {...props}
                >
                </input>
                
                <label htmlFor={label?.toLowerCase()}>{label}</label>
          </div>
    );
}