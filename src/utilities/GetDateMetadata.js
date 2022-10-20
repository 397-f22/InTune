export const timeOfDay = () => {
  const today = new Date();
  const time = today.getHours()
  return (6 <= time && time < 12) ? "Morning" :
    (12 <= time && time < 16) ? "Afternoon" :
    (16 <= time && time < 22) ? "Evening" :
    "Night"
};

export const getSeason = () => {
  const today = new Date();
  const month = today.getMonth();
  return (month <= 2 || month === 12) ? "Winter" :
    (month <= 5) ? "Spring" :
    (month <= 8) ? "Summer" :
    "Fall"
};
