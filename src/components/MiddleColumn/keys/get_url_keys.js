import { getHashKeys } from "./get_hash_keys";
import { getSearchKeys } from "./get_search_keys";

const getUrlKeys = () => getHashKeys() || getSearchKeys() || [];

export { getUrlKeys };
