import { createMap, fetchData } from "./utils.js";

const DISHES_DB_URL = "../../dishes.json";

export const dishesDB = await fetchData(DISHES_DB_URL);

export const dishesSupplementsMap = createMap(dishesDB.supplements);
