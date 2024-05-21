
import "./Results.css";
import finishedImg from "../../assets/finished.png";
import Button from "../Button/Button";
import Text from "../Text/Text";
import results  from "../../data/results.json";
import { useState, useContext } from 'react'
import { QuizContext } from '../../QuizRenderer';
export default function Results({buttonText = "Restart", calcType = "round", approved = 70 ,instructions="", imgUrl="", onReset}){
    const [resultsData, setResultsData] = useState(results);
    const [questions] = useContext(QuizContext);
    const {title, intro} = resultsData;
  

  const points = 100 / results.answersList.length;
  let right=0;
  let rightSummary=[];
  let wrongSummary = [];
  const compareAnswersGetPoints = () => {
    let totalPoints = 0;
    let checkboxPoints;
    resultsData.answersList.forEach((item, index )=> {
        if (questions[index].type === "checkbox") {
            checkboxPoints = checkCheckboxAnswers(questions[index], item.answer, questions[index].answer);
        } else {
            if (item.answer[0].toLowerCase() === questions[index].answer.toString().toLowerCase()) {
                totalPoints += points;
                right++;
                rightSummary.push(questions[index]);
            } else {
                wrongSummary.push(questions[index]);
            }
        }
    });

    return Math[calcType](totalPoints + checkboxPoints);
  };

  const checkCheckboxAnswers = (question, answers, userAnswers) => {
        let rightCounter=0;
        const sortedAnswers = answers.sort();
        const sortedUserAnswers = userAnswers.sort();
        if(answers.length !== userAnswers.length) {
            wrongSummary.push(question);
            return 0;
        }
        sortedAnswers.forEach((answer, i) => {
            if(answer!== null && answer.toLowerCase() === sortedUserAnswers[i]) {
                rightCounter++;
            }
        });
        rightSummary.push(question);
        right++;
        
        return rightCounter === sortedAnswers.length ? points : 0;
    };

    function formatArrayAnswer(answer) {
        if(!Array.isArray(answer)) {
           return answer;
        } else {
            return answer.join(', ');
        }
    }
    const total = compareAnswersGetPoints();

    return (
        <section id="quiz-results">
            <div className="title">
                <Text type="title-big" text={title}/>
                <Text type="title-small" text={intro}/>
            </div>
            <img src={finishedImg}/>
            <div className="instructions">

                 <h2>{`Haz Obtenido:  ${total} puntos`}</h2>
                 {total >= approved  ? "¡¡HAZ APROBADO, FELICIDADES!!" : "ÁNIMO, INTÉNTALO DE NUEVO" }

                <div id="summary-stats">
                    <p>
                    <i className="bi bi-emoji-sunglasses"></i>
                    <span className="number">{right}</span>
                    <span className="text">Aciertos</span>
                    </p>
                    <p>
                    <i className="bi bi-emoji-dizzy"></i>
                    <span className="number">{questions.length-right}</span>
                    <span className="text">Errores</span>
                    </p>
                </div>
                
                <div>
                    <h3>Respuestas Correctas</h3>
                    {rightSummary.map(item => <div key={item.text}>{item.text}<br/>{formatArrayAnswer(item.answer)}</div>)}
                </div>
                <div>
                    <h3>Respuestas Incorrectas</h3>
                    {wrongSummary.map(item => <div key={item.text}>{item.text}<br/>{formatArrayAnswer(item.answer)}</div>)}
                </div>
                {instructions && <Text className="paragraph" text={instructions}/>}
                {imgUrl && <img className="quiz-image" src={imgUrl}/>}
            </div>
            <Button style = "start-button" text={buttonText} onClick={onReset}/>
        </section>
    );
}