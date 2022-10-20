export const weatherDict =
{
  "Clouds": "Cloudy",
  "Snow": "Snowy",
  "Clear": "Clear",
  "Rain": "Rainy",
  "Drizzle": "Drizzly",
  "Thunderstorm": "Stormy"
};

export const weatherTypes = ["", "sunny", "cloudy", "rainy", "snowy"];

export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export const weatherTypeToIcon =
{
  "sunny": "01d",
  "rainy": "09d",
  "cloudy": "03d",
  "snowy": "13d"
}
