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

String tempText = "",humiText = "", distanceText = "", soundText = "", doorText = "",moistureText = "";
String allData = "";

void tempSensor(){
  delay(1000);

  float temp = dht11.readTemperature();
  float humi = dht11.readHumidity();

  tempText = String(temp);
  humiText = String(humi);
}

void moveSensor(){
  digitalWrite(trigPin,LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin,HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin,LOW);

  duration = pulseIn(echoPin,HIGH);
  distance = duration * 0.034 /2;

  distanceText = String(distance);
}

void soundSensor(){
  int sensorValue = digitalRead(soundPin);

  // if(sensorValue) soundText = "Wykryto hałas";
  // else soundText = "cisza";

  soundText = sensorValue;
}

void doorSensor(){
  int doorState = digitalRead(doorPin);

  // if(doorState) doorText = "otwarte";
  // else doorText = "zamkniete";

  doorText= doorState;
}

void moistureSensor(){
  int value = analogRead(A2);

  moistureText = String(value);
}

void connectData(){
  allData = tempText + " " + humiText + " " + distanceText + " " + soundText + " " + doorText + " " + moistureText;
  Serial.println(allData);
}

void mainApp(){
  tempSensor();
  moveSensor();
  soundSensor();
  doorSensor();
  moistureSensor();
  connectData();
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
  mainApp();

  delay(1000);
}