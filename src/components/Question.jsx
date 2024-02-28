import {useContext} from 'react';
import { QuizContext } from '../App';

import Text from "./Text/Text"
import "./Question.css";

import Dropdown from "./Dropdown/Dropdown";
import Checkbox from "./Checkbox/Checkbox";
import Radio from "./Radio/Radio";



export default function Question({instructions="", index, questionTitle="", type="", name = "radio", options=[], ...props}) {
    const [questions] = useContext(QuizContext);

    const renderOptions = (option, i) => {
        if(type === "radio") {
            return <Radio index = {index} updateAnswer = {props.updateAnswer} key= {`option-${i}`} id={option} label={option} name={name}/>
        } else {
            return <Checkbox key= {`option-${i}`} label = {option} name = {option} index={index}/>
        }
    }
    return(<div className="question-container">
        
            <header className="title">
                <Text type ="paragraph" text = {instructions} />
            </header>
            <div className="body">
                <Text type ="question" text = {questionTitle} />
                {/* pass the options from question */
                    type === "dropdown" ? <Dropdown title="Menu" options={questions[index].options}/>
                    : questions[index].options.map((option, i)=> renderOptions(option, i))
                }   
            </div>
        </div>)
}