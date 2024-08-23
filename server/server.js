import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';
import "dotenv/config";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;
app.listen(port,"0.0.0.0",()=>{
    console.log(`serwer nasłuchuje na porcie ${port}`);
})

const conn = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "smartroom"
})

let info = {
    temperature: 0,
    humidity: 0,
    distance: 0,
    isLoud: 0,
    locked: 0,
    moisture: 0
};

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

    if(sensorData[3] == 0) info.isLoud = "Cisza...";
    else info.isLoud = "Zbyt głośno!";

    if(sensorData[4] == 0) info.locked = "Zamknięte";
    else info.locked = "Otwarte";

    if(sensorData[5] >= 920) info.moisture = "Podlej go!!!!";
    else if(sensorData[5] < 920 && sensorData[5] > 580) info.moisture = "W sam raz";
    else if(sensorData[5] < 580) info.moisture = "Zbyt mokry!!!";

    res.send("Dane odebrano poprawnie")
})

conn.connect();

app.get("/tempApi",(req,res)=>{
    conn.query("select * from temperature",(err,results)=>{
        if(err) console.log(err);
        res.json({
            results
        });
    });
})

app.get("/humiApi",(req,res)=>{
    conn.query("select * from humidity",(err,results)=>{
        if(err) console.log(err);
        res.json({
            results
        });
    });
})

app.get("/distanceApi",(req,res)=>{
    conn.query("select * from distance",(err,results)=>{
        if(err) console.log(err);
        res.json({
            results
        });
    });
})

app.get("/loudnessApi",(req,res)=>{
    conn.query("select * from loudness",(err,results)=>{
        if(err) console.log(err);
        res.json({
            results
        });
    });
})

app.get("/lockedApi",(req,res)=>{
    conn.query("select * from locked",(err,results)=>{
        if(err) console.log(err);
        res.json({
            results
        });
    });
})

app.get("/moistureApi",(req,res)=>{
    conn.query("select * from moisture",(err,results)=>{
        if(err) console.log(err);
        res.json({
            results
        });
    });
})