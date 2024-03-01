import Button from "./Button/Button";
import Text from "./Text/Text";
import "./Start.css";

export default function Start({title, intro="", instructions="", buttonText="Start Quiz", imgUrl="https://placehold.co/600x400",  onStart}) {
    return( <section id="quiz-start">
        <div className="title">
            <Text type="title-big" text={title}/>
            <Text type="title-small" text={intro}/>
        </div>
        <div className="instructions">
            <Text className="paragraph" text={instructions}/>
            <img className="quiz-image" src={imgUrl}/>
        </div>
        <Button style = "start-button" text={buttonText} onClick={onStart}/>
    </section>);
}