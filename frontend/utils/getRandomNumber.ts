export const getRandomNumbers = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
