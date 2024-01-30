import Button from "./Button/Button"
import Text from "./Text/Text"
import "./Question.css";
import Pagination from "./Pagination/Pagination";
export default function Question({quizName="", questionTitle="", type=""}) {

    return(<div className="question-container">
        
            <header className="title">
                <Text type ="title-mid" txt = {quizName} />
            </header>
            <div className="body">
                <Text type ="question" txt = {questionTitle} />
            </div>
            <footer className="footer">
                { /*Here goes the pagination and controls*/ }
                <Button type= "icon" icon="bi-chevron-compact-left"/>
                <Pagination item="1" totalItems="10" type="word"/>
                <Button type= "icon" icon="bi-chevron-compact-right"/>
            </footer>
        </div>)
}