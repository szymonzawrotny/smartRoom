import "@/styles/buttons.scss";
import { FaDoorOpen, FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { PiUserSoundFill, PiCactusFill } from "react-icons/pi";

const Buttons = ()=>{

    const handleButton = (e)=>{
        
        const elements = [...document.querySelectorAll("button")];
        elements.forEach(one=>{
            one.classList.remove("selected");
        });

        if(e.target.tagName == "svg"){
            e.target.parentNode.classList.add("selected");
        } else if(e.target.tagName == "path"){
            e.target.parentNode.parentNode.classList.add("selected");
        }else {
            e.target.classList.add("selected");
        }
    }

    return(
        <div className="buttons">
            <button onClick={handleButton}>
                <FaDoorOpen size={26}/>
            </button>
            <button onClick={handleButton}>
                <FaPersonWalkingDashedLineArrowRight size={26}/>
            </button>
            <button onClick={handleButton}>
                <FaTemperatureHigh size={26}/>
            </button>
            <button onClick={handleButton}>
                <WiHumidity size={26}/>
            </button>
            <button onClick={handleButton}>
                <PiUserSoundFill size={26}/>
            </button>
            <button onClick={handleButton}>
                <PiCactusFill size={26}/>
            </button>
        </div>
    )
}
export default Buttons;