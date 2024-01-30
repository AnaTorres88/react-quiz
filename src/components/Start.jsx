import Button from "./Button/Button";
import Text from "./Text/Text";
export default function Start({title, intro="", instructions, buttonText="Start Quiz"}) {
    return( <section>
        <div className="title">
            <Text type="title-big" text={title}/>
            <Text type="title-small" text={intro}/>
        </div>
        <div className="instructions">
            <Text text={instructions}/>
        </div>
        <Button text={buttonText}/>
    </section>);
}