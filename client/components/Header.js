import react , {useEffect, useState} from 'react';
import "@/layouts/header.scss";
import InfoTable from "./InfoTable";
import Buttons from "./Buttons";

const Header = ()=>{

    const [data,setData] = useState({
        info: {
            temperature: 0,
            humidity: 0,
            distance: 0,
            isLoud: 0,
            locked: 0,
            moisture: 0   
        }
    });

    const fetchData = ()=>{
        fetch("http://localhost:5000/api")
        .then(response=>response.json())
        .then(data=>setData(data));
    }

    useEffect(()=>{
        fetchData();
        const interval = setInterval(fetchData,1000);
    },[0]);

    return(
        <div className="info">
            <InfoTable header1="Czy zamknąłeś drzwi?" value={data.info.locked} database=""/>
            <InfoTable header1="Czy coś jest w pokoju?" value={data.info.distance} database=""/>
            <InfoTable header1="Jaka temperatura pokoju??" value={data.info.temperature} database=""/>
            <InfoTable header1="Jaka wilgotność pokoju?" value={data.info.humidity} database=""/>
            <InfoTable header1="Dzieje się coś głośnego?" value={data.info.isLoud} database=""/>
            <InfoTable header1="Czy gleba kaktuska wilgotna?" value={data.info.moisture} database=""/>
            <div className="database">
                <h1>Cała baza</h1>
                <Buttons />
                <div className="dataTable">
                    asd
                </div>
            </div>
            <div className="infoTable" style={{padding:"56px"}}>
                <h1>Author:</h1>
                <p style={{fontSize:"48px"}}>Szymon Zawrotny</p>
            </div>
        </div>
    )
}
export default Header;