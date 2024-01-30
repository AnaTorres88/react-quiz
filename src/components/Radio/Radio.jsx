import {useState} from 'react';

export default function Radio({label, checked, name, id, ariaLabel, ...props}) {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
          <div className="radioContainer">
                <input type="radio"
                id={id}
                name = {name}
                aria-label={ariaLabel}
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                {...props}
                >
                </input>
                <label htmlFor={label?.toLowerCase()}>{label}</label>
          </div>
    );
}