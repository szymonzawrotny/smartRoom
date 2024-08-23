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
        const info = document.querySelector(".info");
        let iconNumber;

        const elements = [...document.querySelectorAll(".icon")];
        elements.forEach(one=>{
            one.classList.remove("choosen");
        })
        
        if(e.target.tagName == "svg"){
            e.target.parentNode.classList.add('choosen');
            iconNumber = e.target.parentNode.getAttribute("data-icon");
        } else if(e.target.tagName == "path"){
            e.target.parentNode.parentNode.classList.add('choosen');
            iconNumber = e.target.parentNode.parentNode.getAttribute("data-icon");
        }else {
            e.target.classList.add('choosen');
            iconNumber = e.target.getAttribute("data-icon");
        }

        main.classList.add("selected");
        info.classList.add("showed"); 
          
        const height = iconNumber * document.querySelector(".infoTable").clientHeight + 30;

        info.scrollTo({
            behavior: "smooth",
            top: height
        })
    }

    return(
        <main>
            <div className="icon" onClick={handleReturn}>
                <IoHome size={72}/>
            </div>
            <div className="icon" onClick={handleButton} data-icon="0">
                <FaDoorOpen size={72}/>
            </div>
            <div className="icon" onClick={handleButton} data-icon="1">
                <FaPersonWalkingDashedLineArrowRight size={72}/>
            </div>
            <div className="icon" onClick={handleButton} data-icon="2">
                <FaTemperatureHigh size={72}/>
            </div>
            <div className="icon" onClick={handleButton} data-icon="3">
                <WiHumidity size={72}/>
            </div>
            <div className="icon" onClick={handleButton} data-icon="4">
                <PiUserSoundFill size={72}/>
            </div>
            <div className="icon" onClick={handleButton} data-icon="5">
                <PiCactusFill size={72}/>
            </div>
            <div className="icon" onClick={handleButton} data-icon="6">
                <FaDatabase size={72}/>
            </div>
            <div className="icon" onClick={handleButton} data-icon="7">
                <FaPerson size={72}/>
            </div>
        </main>
    )
}
export default Icons;