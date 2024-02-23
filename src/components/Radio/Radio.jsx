import {useState} from 'react';

export default function Radio({label, checked, name, id, updateAnswer, index, ...props}) {
      const defaultChecked = checked ? checked : false;
      const [answer, setAnswer] = useState(null);
      const idLower = id.toLowerCase();
      const onChangeRadio = (e) => {
            const answerLower = e.target.value.toLowerCase();
            setAnswer(() => answerLower);
            updateAnswer(index,e .target.value);
      }
    return (
          <div className="radioContainer">
                <input type="radio"
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