import { createContext } from "react";
export const SpeedContext = createContext({
  speed: 0,
  setSpeed: null,
});

export default SpeedContext;
