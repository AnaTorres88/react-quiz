import Question from "./Question";
import "./Quiz.css";
import Text from "./Text/Text";
import Pagination from "./Pagination/Pagination";
import Button from "./Button/Button";
import {useContext, useState} from 'react';
import { QuizContext } from '../App';

/* Takes care of pagination */
export default function Quiz({title, updateAnswer, finish}) {
    const [questions] = useContext(QuizContext);
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
        {
            questions.map((question, i) => 
                i==pageCount-1 &&
                <Question key={'question-'+i} index = {i} updateAnswer = {updateAnswer} name={question.name} options = {question.options} type = {question.type} instructions= {question.instructions} questionTitle={question.text}/>
            )
        }
        <span className="mark"></span>
        <footer className="footer">
            <Button type= "icon" icon="bi-chevron-compact-left" onClick={prev}/>
            <Pagination item={pageCount} totalItems={questions.length} type="word"/>
            {pageCount < questions.length ? <Button type= "icon" icon="bi-chevron-compact-right" onClick={next}/>
            : <Button text="Finish" style="finish-button" onClick={finish}/>}
        </footer>
    </section>);
}