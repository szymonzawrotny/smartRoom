import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const port = 5000;
let info = {
    temp: 27,
    humi: 40,
    locked: true
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

// app.post("/data",(req,res)=>{
//     const sensorData = req.body;
//     console.log(`Odebrano z esp8266 ${sensorData}`);
//     info = sensorData;
//     res.send("dane odebrano poprawnie")
// })