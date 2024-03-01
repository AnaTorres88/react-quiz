import { useContext} from 'react';
import { QuizContext } from '../../App';
import { updateAnswers}  from '../../helpers/updateAnswers';
import Button from "../Button/Button";
import Text from "../Text/Text";
export default function Results({title, options,...props}){
  const [questions, setQuestions] = useContext(QuizContext);
  
    return (
        <section id="quiz-results">
            <div className="title">
                <Text type="title-big" text={title}/>
                <Text type="title-small" text={intro}/>
            </div>
            <div className="instructions">
                <Text className="paragraph" text={instructions}/>
                <img className="quiz-image" src={imgUrl}/>
            </div>
            <Button style = "start-button" text={buttonText} onClick={onStart}/>
        </section>
    );
}