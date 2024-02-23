
import Dropdown from "./Dropdown/Dropdown";
import Checkbox from "./Checkbox/Checkbox";
import Radio from "./Radio/Radio";

export default function Options({type, option}) {
    const renderOptions = () => {
        if(type === "radio") {
            return <Radio id={option} label={option} name="option"/>
        } else if(type === "checkbox") {
            return <Checkbox label = "Happy label"/>
        } else {
            return <Dropdown title="Menu" options={['one', 'two']}/>
        }
    }

    return(
        <div className="options-container">
            {renderOptions()}
        </div>
    )
}
