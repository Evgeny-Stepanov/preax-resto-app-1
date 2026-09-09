import { createElement, createPictureElement } from "../../base/elements.js";
import { createDetailsElement } from "./details.js";

export const createProductElement = (dishesDB, dishDetails) => {
  const { currency, badges: allBadges, supplements: allSupplements } = dishesDB;

  const {
    img,
    title,
    badges: dishBadgeIds,
    description,
    sizes,
    supplements: dishSupplementsIds,
  } = dishDetails;

  const productElement = createElement("div", "product");

  const dishImageElement = createPictureElement({
    width: 422,
    height: 422,
    jpgSrc: img,
    alt: title,
    className: "product__image",
  });

  const detailsElement = createDetailsElement({
    allBadges,
    dishBadgeIds,
    title,
    description,
    sizes,
    dishSupplementsIds,
  });

  productElement.append(dishImageElement, detailsElement);

  return productElement;
};
