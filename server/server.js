import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';
import cron from 'node-cron';
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
    distance: 25,
    isLoud: 0,
    locked: 0,
    moisture: 0
};

let doorLastState = 0;
let cactusLastState = 0;
let distanceLastState = 0;
let cronIteration = 0;

app.get("/api",(req,res)=>{
    res.json({
        info,
    })
})

conn.connect();

app.post("/data",(req,res)=>{
    const sensorData = req.body.value.split(" ");

    info.temperature = sensorData[0];
    info.humidity = sensorData[1];

    cron.schedule('13 00 * * *',()=>{
        if(cronIteration == 0){
            let query = `insert into temperature values(NULL,${sensorData[0]},CURDATE(),CURTIME())`;
            conn.query(query,(err,results)=>{
                if(err) console.log(err);
            })

            query = `insert into humidity values(NULL,${sensorData[1]},CURDATE(),CURTIME())`;
            conn.query(query,(err,results)=>{
                if(err) console.log(err);
            })

            cronIteration++;
        }
    })

    cron.schedule('14 00 * * *',()=>{
        cronIteration = 0;
    })

    if(sensorData[2] <= 20 && distanceLastState != 1){
        info.distance = "Coś jest w pokoju...";
        distanceLastState = 1;
        const query = `insert into distance values(NULL,"Wykryto ruch",CURDATE(),CURTIME())`;
        conn.query(query,(err,results)=>{
            if(err) console.log(err);
        })
    } else if(sensorData[2] <= 20){
        info.distance = "Coś jest w pokoju...";
        distanceLastState = 1;
    } else{
        info.distance = "Raczej pusto...";
        distanceLastState = 0;
    }

    if(sensorData[3] == 0) {
        info.isLoud = "Cisza...";
    } else {
        info.isLoud = "Zbyt głośno!";
        const query = `insert into loudness values(NULL,"Zbyt głośno",CURDATE(),CURTIME())`;
        conn.query(query,(err,results)=>{
            if(err) console.log(err);
        })
    }

    if(sensorData[4] == 0){
        info.locked = "Zamknięte";
        doorLastState = 0;
    } else if(sensorData[4] == 1 && sensorData[4] != doorLastState){
        info.locked = "Otwarte";
        doorLastState = 1;
        const query = `insert into locked values(NULL,"Otwarto",CURDATE(),CURTIME())`;
        conn.query(query,(err,results)=>{
            if(err) console.log(err);
        })
    } else if(sensorData[4] == 1){
        info.locked = "Otwarte";
        doorLastState = 1;
    }

    if(sensorData[5] >= 920 && cactusLastState != 0){
        info.moisture = "Podlej go!!!!";
        cactusLastState = 0;
        const query = 'insert into moisture values(NULL,"Zbyt sucha gleba",CURDATE(),CURTIME())';
        conn.query(query,(err,results)=>{
            if(err) console.log(err);
        })
    } else if(sensorData[5] >= 920 ){
        info.moisture = "Podlej go!!!!";
        cactusLastState = 0;
    } else if(sensorData[5] < 920 && sensorData[5] > 580){
        info.moisture = "W sam raz";
        cactusLastState = 1;
    } else if(sensorData[5] < 580 && cactusLastState != 2){
        info.moisture = "Zbyt mokry!!!";
        cactusLastState = 2;
        const query = 'insert into moisture values(NULL,"Zbyt mokra gleba",CURDATE(),CURTIME())';
        conn.query(query,(err,results)=>{
            if(err) console.log(err);
        })
    }else if(sensorData[5] < 580) {
        info.moisture = "Zbyt mokry!!!";
        cactusLastState = 2;
    }

    res.send("Dane odebrano poprawnie")
})

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