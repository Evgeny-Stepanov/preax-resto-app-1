import { fetchData } from "./utils.js";

const DISHES_DB_URL = "../../dishes.json";

export const dishes = await fetchData(DISHES_DB_URL);
