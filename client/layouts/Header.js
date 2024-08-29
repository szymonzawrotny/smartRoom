import react , {useEffect, useState} from 'react';
import "@/styles/header.scss";
import InfoTable from "./InfoTable";
import DatabaseTable from './DatabaseTable';
import AuthorPanel from './AuthorPanel';

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
    const [tempTable,setTempTable] = useState([]);
    const [humiTable,setHumiTable] = useState([]);
    const [distanceTable,setDistanceTable] = useState([]);
    const [loudnessTable,setLoudnessTable] = useState([]);
    const [lockedTable,setLockedTable] = useState([]);
    const [moistureTable,setMoistureTable] = useState([]);

    const fetchData = ()=>{
        fetch("http://localhost:5000/api")
        .then(response=>response.json())
        .then(data=>setData(data));
    }

    const fetchTemp = ()=>{
        fetch("http://localhost:5000/tempApi")
        .then(response=>response.json())
        .then(data=>setTempTable(data.results));
    }

    const fetchHumi = ()=>{
        fetch("http://localhost:5000/humiApi")
        .then(response=>response.json())
        .then(data=>setHumiTable(data.results));
    }

    const fetchDistance = ()=>{
        fetch("http://localhost:5000/distanceApi")
        .then(response=>response.json())
        .then(data=>setDistanceTable(data.results));
    }

    const fetchLoudness = ()=>{
        fetch("http://localhost:5000/loudnessApi")
        .then(response=>response.json())
        .then(data=>setLoudnessTable(data.results));
    }

    const fetchLocked = ()=>{
        fetch("http://localhost:5000/lockedApi")
        .then(response=>response.json())
        .then(data=>setLockedTable(data.results));
    }

    const fetchMoisture = ()=>{
        fetch("http://localhost:5000/moistureApi")
        .then(response=>response.json())
        .then(data=>setMoistureTable(data.results));
    }

    useEffect(()=>{
        fetchData();
        fetchTemp();
        fetchHumi();
        fetchDistance();
        fetchLoudness();
        fetchLocked();
        fetchMoisture();
        setInterval(fetchData,5000);
    },[0]);

    const tab = [
        {
            tittle: "Czy zamknąłeś drzwi?",
            value: data.info.locked,
            database: lockedTable,
        },
        {
            tittle: "Czy coś jest w pokoju?" ,
            value: data.info.distance,
            database: distanceTable,
        },
        {
            tittle: "Jaka temperatura pokoju??",
            value: `${data.info.temperature}\u00b0C`,
            database: tempTable,
        },
        {
            tittle: "Jaka wilgotność pokoju?",
            value: `${data.info.humidity}%`,
            database: humiTable,
        },
        {
            tittle: "Dzieje się coś głośnego?",
            value: data.info.isLoud,
            database: loudnessTable,
        },
        {
            tittle: "Co z kaktuskiem?",
            value: data.info.moisture,
            database: moistureTable,
        },
    ]

    const elements = tab.map(one=><InfoTable key={one.tittle} header1={one.tittle} value={one.value} database={one.database}/>)

    return(
        <div className="info">
            {elements}
            <DatabaseTable/>
            <AuthorPanel />
        </div>
    )
}
export default Header;