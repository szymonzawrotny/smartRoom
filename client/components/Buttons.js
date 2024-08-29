import "@/styles/buttons.scss";
import { FaDoorOpen, FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { PiUserSoundFill, PiCactusFill } from "react-icons/pi";

const Buttons = (props)=>{
    return(
        <div className="buttons">
            <button onClick={props.handleButton}>
                <FaDoorOpen size={26}/>
            </button>
            <button onClick={props.handleButton}>
                <FaPersonWalkingDashedLineArrowRight size={26}/>
            </button>
            <button onClick={props.handleButton}>
                <FaTemperatureHigh size={26}/>
            </button>
            <button onClick={props.handleButton}>
                <WiHumidity size={26}/>
            </button>
            <button onClick={props.handleButton}>
                <PiUserSoundFill size={26}/>
            </button>
            <button onClick={props.handleButton}>
                <PiCactusFill size={26}/>
            </button>
        </div>
    )
}
export default Buttons;