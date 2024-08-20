import "@/layouts/buttons.scss";
import { FaDoorOpen, FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { PiUserSoundFill, PiCactusFill } from "react-icons/pi";

const Buttons = ()=>{
    return(
        <div className="buttons">
            <button>
                <FaDoorOpen size={26}/>
            </button>
            <button>
                <FaPersonWalkingDashedLineArrowRight size={26}/>
            </button>
            <button>
                <FaTemperatureHigh size={26}/>
            </button>
            <button>
                <WiHumidity size={26}/>
            </button>
            <button>
                <PiUserSoundFill size={26}/>
            </button>
            <button>
                <PiCactusFill size={26}/>
            </button>
        </div>
    )
}
export default Buttons;