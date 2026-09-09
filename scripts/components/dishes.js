import { getDetailsFromDatabase } from "../base/utils.js";
import { dishesDB } from "../base/constants.js";

export const getDishDetails = (dishLinkElement) => {
  const dishId = dishLinkElement.dataset.dishId;
  const dishDetails = getDetailsFromDatabase(dishId, dishesDB.products);

  return dishDetails;
};
