#include <SoftwareSerial.h>
#include "DHT.h"

const int tempPin = 2 ;
DHT dht11(tempPin,DHT11);
const int trigPin = 4;
const int echoPin = 5;
long duration;
int distance;
const int soundPin = 3;
const int doorPin = 6;

String sensorData[6];
String allData = "";

void tempSensor(){
  delay(1000);

  float temp = dht11.readTemperature();
  float humi = dht11.readHumidity();

  sensorData[0] = String(temp);
  sensorData[1] = String(humi);
}

void moveSensor(){
  digitalWrite(trigPin,LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin,HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin,LOW);

  duration = pulseIn(echoPin,HIGH);
  distance = duration * 0.034 /2;

  sensorData[2] = String(distance);
}

void soundSensor(){
  int sensorValue = digitalRead(soundPin);
  sensorData[3] = sensorValue;
}

void doorSensor(){
  int doorState = digitalRead(doorPin);
  sensorData[4]= doorState;
}

void moistureSensor(){
  int value = analogRead(A2);

  sensorData[5] = String(value);
}

void connectData(){
  for(int i=0;i<6;i++){
    allData += sensorData[i] + " ";
  }
  Serial.println(allData);
}

void setup(){
  Serial.begin(9600);
  dht11.begin();
  pinMode(trigPin,OUTPUT);
  pinMode(echoPin,INPUT);
  pinMode(soundPin, INPUT);
  pinMode(doorPin,INPUT_PULLUP);
}

void loop(){
  tempSensor();
  moveSensor();
  soundSensor();
  doorSensor();
  moistureSensor();
  connectData();
  allData = "";

  delay(1000);
}