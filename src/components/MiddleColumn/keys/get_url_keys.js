import { getSearchKeys } from "./get_search_keys";
// index.js :: window.onpopstate
const getUrlKeys = () => getSearchKeys() || [];

export { getUrlKeys };
