import Button from "./Button/Button"
import Text from "./Text/Text"
import "./Question.css";

import Dropdown from "./Dropdown/Dropdown";
import Checkbox from "./Checkbox/Checkbox";
import Radio from "./Radio/Radio";
export default function Question({instructions="", questionTitle="", type="", name = "radio", options=[], ...props}) {
    const renderOptions = (option, i) => {
        if(type === "radio") {
            return <Radio index = {props.index} updateAnswer = {props.updateAnswer} key= {`option-${i}`} id={option} label={option} name={name}/>
        } else {
            return <Checkbox key= {`option-${i}`} label = {option} name = {option}/>
        }
    }
    return(<div className="question-container">
        
            <header className="title">
                <Text type ="paragraph" text = {instructions} />
            </header>
            <div className="body">
                <Text type ="question" text = {questionTitle} />
                {/* pass the options from question */
                    type === "dropdown" ? <Dropdown title="Menu" options={options}/>
                    : options.map((option, i)=> renderOptions(option, i))
                }   
            </div>
        </div>)
}