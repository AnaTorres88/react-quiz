import {useContext, useState} from 'react';
import Question from "./Question";
import "./Quiz.css";
import Text from "./Text/Text";
import Footer from "./Footer/Footer";
import { QuizContext } from '../QuizRenderer';

/* Takes care of pagination */
export default function Quiz({title, updateAnswer, start, finish}) {
    const [questions] = useContext(QuizContext);
    const [pageCount, setPageCount] = useState(1);
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
        <Footer changePageCount = { setPageCount } pageCount = {pageCount} start = {start} finish = {finish}/>
    </section>);
}