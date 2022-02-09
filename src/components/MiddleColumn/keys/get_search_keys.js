import { keysAreValid } from "./keys_are_valid";

// index.js :: window.onpopstate

const getSearchKeys = () => {
  const parameters = new URLSearchParams(window.location.search); // 000110

  if (parameters.has("k")) {
    const pars = parameters.get("k"); // 000110

    const keys = [
      Number.parseInt(pars.slice(0, 2)),
      Number.parseInt(pars.slice(2, 4)),
      Number.parseInt(pars.slice(4, 6)),
    ];

    if (keysAreValid(keys)) {
      return keys;
    }
  }
};

export { getSearchKeys };
