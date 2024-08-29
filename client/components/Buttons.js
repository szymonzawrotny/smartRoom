import "@/styles/buttons.scss";
import { FaDoorOpen, FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { PiUserSoundFill, PiCactusFill } from "react-icons/pi";

const Buttons = (props)=>{
    return(
        <div className="buttons">
            <button onClick={props.handleButton} data-table="locked">
                <FaDoorOpen size={26}/>
            </button>
            <button onClick={props.handleButton} data-table="distance">
                <FaPersonWalkingDashedLineArrowRight size={26}/>
            </button>
            <button onClick={props.handleButton} data-table="temperature">
                <FaTemperatureHigh size={26}/>
            </button>
            <button onClick={props.handleButton} data-table="humidity">
                <WiHumidity size={26}/>
            </button>
            <button onClick={props.handleButton} data-table="loudness">
                <PiUserSoundFill size={26}/>
            </button>
            <button onClick={props.handleButton} data-table="cactus">
                <PiCactusFill size={26}/>
            </button>
        </div>
    )
}
export default Buttons;