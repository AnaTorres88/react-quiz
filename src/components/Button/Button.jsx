import "./Button.css";
export default function Button({text='', type='', style='', size='', icon='', disabled = false, onClick}){
    let buttonEl;
    switch(true) { 
        case type === "icon":
            buttonEl =  <button disabled = {disabled} type="button" className={`btn btn-primary ${size} ${style}`} onClick={onClick}>
                            <i className={'bi ' + icon}></i>
                            {text ? <span>{text}</span> : null}
                        </button>;
            break;
        case type === "link":
            buttonEl =  <a disabled = {disabled} type="button"  className={`btn btn-primary ${type} ${style}`} onClick={onClick}>{txt}</a>;
            break;
        default: 
            buttonEl = <button disabled = {disabled} type="button" className={'btn btn-primary ' + style } onClick={onClick}>{text}</button>;
    }

    return (
        <>  
            {buttonEl}
        </>
    );
}