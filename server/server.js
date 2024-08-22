import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const port = 5000;
let info = {
    temperature: 0,
    humidity: 0,
    distance: 0,
    isLoud: 0,
    locked: 0,
    moisture: 0
};

app.use(bodyParser.json());
app.use(cors());

app.listen(port,"0.0.0.0",()=>{
    console.log(`serwer nasłuchuje na porcie ${port}`);
})

app.get("/api",(req,res)=>{
    res.json({
        info,
    })
})

app.post("/data",(req,res)=>{
    const sensorData = req.body.value.split(" ");

    info.temperature = sensorData[0];
    info.humidity = sensorData[1];
    info.distance = sensorData[2];
    info.isLoud = sensorData[3];
    info.locked = sensorData[4];
    info.moisture = sensorData[5];

    res.send("Dane odebrano poprawnie")
})