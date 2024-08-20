'use client'
import "@/layouts/icons.scss";

import { IoHome } from "react-icons/io5";
import { FaDoorOpen, FaDatabase, FaPerson, FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { PiUserSoundFill, PiCactusFill } from "react-icons/pi";

const Icons = ()=>{

    const handleReturn = ()=>{
        const main = document.querySelector("main");
        const info = document.querySelector(".info")
        const elements = [...document.querySelectorAll(".icon")];
        elements.forEach(one=>{
            one.classList.remove("choosen");
        })
        main.classList.remove("selected");
        info.classList.remove("showed");
    }

    const handleButton = (e)=>{
        const main = document.querySelector("main");
        const info = document.querySelector(".info")

        const elements = [...document.querySelectorAll(".icon")];
        elements.forEach(one=>{
            one.classList.remove("choosen");
        })
        
        if(e.target.tagName == "svg"){
            e.target.parentNode.classList.add('choosen');
        } else if(e.target.tagName == "path"){
            e.target.parentNode.parentNode.classList.add('choosen');
        }else {
            e.target.classList.add('choosen');
        }

        main.classList.add("selected");
        info.classList.add("showed");   
    }

    return(
        <main>
            <div className="icon" onClick={handleReturn}>
                <IoHome size={72}/>
            </div>
            <div className="icon" onClick={handleButton}>
                <FaDoorOpen size={72}/>
            </div>
            <div className="icon" onClick={handleButton}>
                <FaPersonWalkingDashedLineArrowRight size={72}/>
            </div>
            <div className="icon" onClick={handleButton}>
                <FaTemperatureHigh size={72}/>
            </div>
            <div className="icon" onClick={handleButton}>
                <WiHumidity size={72}/>
            </div>
            <div className="icon" onClick={handleButton}>
                <PiUserSoundFill size={72}/>
            </div>
            <div className="icon" onClick={handleButton}>
                <PiCactusFill size={72}/>
            </div>
            <div className="icon" onClick={handleButton}>
                <FaDatabase size={72}/>
            </div>
            <div className="icon" onClick={handleButton}>
                <FaPerson size={72}/>
            </div>
        </main>
    )
}
export default Icons;