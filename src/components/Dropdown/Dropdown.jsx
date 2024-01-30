import {useState} from 'react';

export default function Dropdown({title, options, ariaLabel,...props}){
  const [isSelected, setSelected] = useState('');
    return (
      <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {title}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, index) =><li key={index}> <a className="dropdown-item" href="#" onClick = {(() => setSelected(option))} >{option}</a></li>)}
      </ul>
    </div>

    );
}