import { getHashKeys } from "./get_hash_keys";
import { getSearchKeys } from "./get_search_keys";

const getUrlKeys = () => {
  const hashKeys = getHashKeys();
  if (hashKeys) {
    return hashKeys;
  }

  const searchKeys = getSearchKeys();
  if (searchKeys) {
    return searchKeys;
  }

  return [];
};

export { getUrlKeys };
