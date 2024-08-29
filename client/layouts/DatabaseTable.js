
import react, {useState, useEffect} from 'react';
import Buttons from "../components/Buttons";
import "@/styles/databaseTable.scss";

const DatabaseTable = ()=>{

    const [data,setData] = useState("hello");

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

        setData("change")
    }

    return(
        <div className="database">
            <h1>Cała baza</h1>
            <Buttons handleButton={handleButton}/>
            <div className="dataTable">
                <p>{data}</p>
            </div>
        </div>
    )
}
export default DatabaseTable;