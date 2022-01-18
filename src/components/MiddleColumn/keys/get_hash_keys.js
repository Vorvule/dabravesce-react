import { keysAreValid } from "./keys_are_valid";

const getHashKeys = () => {
  const hash = window.location.hash.replace("#", ""); // '000110'
  
  const keys = [
      Number.parseInt(hash.slice(0, 2)),
      Number.parseInt(hash.slice(2, 4)),
      Number.parseInt(hash.slice(4, 6)),
    ];

  if (keysAreValid(keys)) {
    return keys;
  }
};

export { getHashKeys };
