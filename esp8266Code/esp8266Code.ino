#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const String ssid = "Tenda_171B30";
const String password = "rocznik2021";
const String serverName = "http://192.168.1.104:5000/data";
WiFiClient client;

void setup()
{
  Serial.begin(9600);
  Serial.println("esp8266 gotowe");

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.println("trying to connect wifi");
  }
  Serial.println("Connected succesfully");
}

void loop()
{
  String dataFromArduino = Serial.readStringUntil('\n');
  dataFromArduino.trim();

  Serial.println("esp8266 otrzymał: " + dataFromArduino);

  if (WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;

    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");

    String postData = "{\"value\":\"" + dataFromArduino + "\"}";

    int httpResponseCode = http.POST(postData);

    if (httpResponseCode > 0)
    {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    }
    else
    {
      Serial.print("Błąd połączenia: ");
      Serial.println(httpResponseCode);
      Serial.println(WiFi.localIP());
    }
    http.end();
  }
  else
  {
    Serial.println("Rozłączono z WiFi");
  }

  delay(1000);
}
