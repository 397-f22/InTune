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
};

export const backgroundColorsBySeason = {
  "Fall": ["251, 147, 50", "246, 202, 161"],
  "Winter": ["48, 146, 211", "184, 228, 243"],
  "Spring": ["62, 125, 80", "181, 242, 190"],
  "Summer": ["159, 181, 35", "240, 232, 161"]
};

export const timeOfDayToOpacity = {
  "Morning": 1,
  "Afternoon": 0.8,
  "Evening": 0.6,
  "Night": 0.4
};
