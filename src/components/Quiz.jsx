import Question from "./Question";
import "./Quiz.css";
import Text from "./Text/Text";
import Pagination from "./Pagination/Pagination";
import Button from "./Button/Button";
import { useState } from "react";
export default function Quiz({title, questions, updateAnswer}) {
    const [pageCount, setPageCount] = useState(1);
    const next = () => {
        if(pageCount<questions.length) {
            setPageCount(pageCount+1);
        }
    }
    
    const prev = () => {
        if(pageCount!==1) {
            setPageCount(pageCount-1);
        }
    }
    return(
    <section id="quiz">
        <header className="title">
            <Text type="title-small" text={title}/>
        </header>
        {//TODO: create quiz array set controls
            questions.map((question, i) => 
                i==pageCount-1 &&
                <Question key={'question-'+i} index = {i} updateAnswer = {updateAnswer} name={question.name} options = {question.options} type = {question.type} instructions= {question.instructions} questionTitle={question.text}/>
            )
        }
        <span className="mark"></span>
        <footer className="footer">
                { /*Here goes the pagination and controls. We must know the total number of questions and set a counter*/ }
            <Button type= "icon" icon="bi-chevron-compact-left" onClick={prev}/>
            <Pagination item={pageCount} totalItems={questions.length} type="word"/>
            <Button type= "icon" icon="bi-chevron-compact-right" onClick={next}/>
        </footer>
    </section>);
}