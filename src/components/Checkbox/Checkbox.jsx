import {useState} from 'react';

export default function Checkbox({label, checked, name, ...props}){
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
          <div className="checkboxContainer">
            <label>
                <input type="checkbox" 
                checked={isChecked}
                name={name}
                onChange={() => setIsChecked((prev) => !prev)}
                {...props}
                >
                </input>
                <span>{label}</span>
            </label>
          </div>
    );
}