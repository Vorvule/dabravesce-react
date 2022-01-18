import { keysAreValid } from "./keys_are_valid";

const getSearchKeys = () => {
  const parameters = new URLSearchParams(window.location.search); // 0-1-10

  if (parameters.has("i")) {
    const pars = parameters.get("i").split("-"); // ['0', '1', '10']
    
    const keys = [
      Number.parseInt(pars[0]),
      Number.parseInt(pars[1]),
      Number.parseInt(pars[2]),
    ];

    if (keysAreValid(keys)) {
      return keys;
    }
  }
};

export { getSearchKeys };
