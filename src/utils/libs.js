export const SPEED_STORAGE_KEY = "SPEED_STORAGE_KEY";

const PROGRESS_DELAY = 10;
export const getProgressValue = (elapsedTime, speed) => {
  if (!elapsedTime || !speed) return 100;
  return 100 - (elapsedTime * (100 + PROGRESS_DELAY)) / speed;
};

export default getProgressValue;
