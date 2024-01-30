
import './Text.css';

export default function Text({type = '', text = "Lorem Ipsum Dolor Sit Amet"}) {
    let textEl;
    switch(true) { 
        case type === "question":
            textEl = <h4 className={type}>{text}</h4>;
            break;
        case type === "title-big":
            textEl =  <h1 className={type}>{text}</h1>;
            break;
        case type === "title-mid":
            textEl =  <h2 className={type}>{text}</h2>;
            break;
        case type === "title-small":
            textEl =  <h3 className={type}>{text}</h3>;
            break;
        default:
           textEl =  <p>{text}</p>
    }

    return (
        <>
            {textEl}
        </>
    );
}