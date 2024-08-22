void setup()
{
  Serial.begin(9600);
  Serial.println("esp8266 gotowe");
}

void loop()
{
  String dataFromArduino = Serial.readStringUntil('\n');
  
  Serial.println("esp8266 otrzymał: " + dataFromArduino);

  delay(3000);
}
