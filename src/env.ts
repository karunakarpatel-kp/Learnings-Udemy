import dotenv from "dotenv";

let loaded = false;

const loadENV = () => {
  // If loaded is true then stop the function running again and again. It SafeGaurds not to run multiple times.
  if (loaded) return;
  dotenv.config();
  loaded = true;
};

export default loadENV;
