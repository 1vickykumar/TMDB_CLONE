import { useState } from "react";
import './ToggleButton.css';

const ToggleButton = (props) => {
    // console.log(props, 'props');
    const [active, setActive] = useState('');
    const handleClick = (e) => {
        console.log('buttonClicked:', e);
        setActive(e.target.id);
        props.getData(e.target.value)
    }
    return (
        <div className="btn-container">
            <h2>{props.name}</h2>
            <div className="toggle_group">
                {props.data?.map((row, i) => {
                    return (
                        <input type="button" className={active == i ? 'active' : ''} key={i} id={i} name={row} value={row} onClick={handleClick} />
                    )

                })}
            </div>
        </div>
    )
}
export default ToggleButton