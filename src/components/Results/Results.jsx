
import Button from "../Button/Button";
import Text from "../Text/Text";
import results  from "../../data/results.json";
import { useState, useContext } from 'react'
import { QuizContext } from '../../App';
export default function Results({buttonText = "Restart", calcType = "round", approved = 70 ,instructions="", imgUrl="", onReset}){
    const [resultsData, setResultsData] = useState(results);
    const [questions] = useContext(QuizContext);
    const {title, intro} = resultsData;
  

  const points = 100 / results.answersList.length;
  const compareAnswersGetPoints = () => {
    let totalPoints = 0;
    let checkboxPoints;
    resultsData.answersList.forEach((item, index )=> {
        console.log(item.answer, questions[index].answer)
        if (questions[index].type === "checkbox") {
            checkboxPoints = checkCheckboxAnswers(item.answer, questions[index].answer);
        }
        if (item.answer[0].toLowerCase() === questions[index].answer.toString().toLowerCase()) {
            totalPoints += points;
        }
    });

    return Math[calcType](totalPoints + checkboxPoints);
  };

  const checkCheckboxAnswers = (answers, userAnswers) => {
        let rightCounter=0;
        const sortedAnswers = answers.sort();
        const sortedUserAnswers = userAnswers.sort();
        if(answers.length !== userAnswers.length) {
            return;
        }
        sortedAnswers.forEach((answer, i) => {
            if(answer.toLowerCase() === sortedUserAnswers[i]) {
                rightCounter++;
            }
        });
        
        return rightCounter === sortedAnswers.length ? points : 0;
    };
    const total = compareAnswersGetPoints();

    return (
        <section id="quiz-results">
            <div className="title">
                <Text type="title-big" text={title}/>
                <Text type="title-small" text={intro}/>
            </div>
            <div className="instructions">

                 <h2>{`Haz Obtenido:  ${total} puntos`}</h2>
                 {total >= approved  ? "¡¡HAZ APROVADO, FELICIDADES!!" : "ÁNIMO, INTÉNTALO DE NUEVO" }

                {instructions && <Text className="paragraph" text={instructions}/>}
                {imgUrl && <img className="quiz-image" src={imgUrl}/>}
            </div>
            <Button style = "start-button" text={buttonText} onClick={onReset}/>
        </section>
    );
}