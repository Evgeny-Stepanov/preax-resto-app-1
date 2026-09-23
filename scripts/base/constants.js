import { createMap, fetchData } from "./utils.js";

const DISHES_DB_URL = new URL("../../dishes.json", import.meta.url);

export const dishesDB = await fetchData(DISHES_DB_URL);

export const dishesSupplementsMap = createMap(dishesDB.supplements);
