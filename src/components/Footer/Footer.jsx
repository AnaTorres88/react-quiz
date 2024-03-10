import "./Footer.css";
import Pagination from "../Pagination/Pagination";
import Button from "../Button/Button";
import {useContext, useState} from 'react';
import { QuizContext } from '../../App';

export default function Footer({changePageCount, pageCount, start, finish}) {
    const [questions] = useContext(QuizContext);


    const isDisabled = () => {
        return (questions[pageCount-1].required && 
            (questions[pageCount-1].answer == null || questions[pageCount-1].answer == null))
    };
    const next = () => {
        if(pageCount<questions.length) {
            changePageCount(pageCount+1);
        }
    };
    
    const prev = () => {
        if(pageCount!==1) {
            changePageCount(pageCount-1);
        } else {
            start();
        }
    };

    return (
        <footer className="footer">
            <Button type= "icon" icon="bi-chevron-compact-left" onClick={prev}/>
            <Pagination item={pageCount} totalItems={questions.length} type="word"/>
            {pageCount < questions.length ? 
            <Button disabled={isDisabled()} type= "icon" icon="bi-chevron-compact-right" onClick={next}/>
            : <Button text="Finish" style="finish-button" onClick={finish}/>}
        </footer>
    )

}