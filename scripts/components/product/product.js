import { createElement, createPictureElement } from "../../base/elements.js";
import { createDetailsElement } from "./details.js";

export const createProductElement = (dishesDB, dishDetails) => {
  const cssClasses = {
    product: "product",
    dishImage: "product__image",
  };

  const { currency, badges: allBadges } = dishesDB;

  const {
    img,
    title,
    badges: dishBadgeIds,
    description,
    sizes,
    supplements: dishSupplementsIds,
  } = dishDetails;

  const productElement = createElement("div", cssClasses.product);

  const dishImageElement = createPictureElement({
    width: 422,
    height: 422,
    jpgSrc: img,
    alt: title,
    className: cssClasses.dishImage,
  });

  const detailsElement = createDetailsElement({
    allBadges,
    dishBadgeIds,
    title,
    description,
    sizes,
    currency,
    dishSupplementsIds,
  });

  productElement.append(dishImageElement, detailsElement);

  return productElement;
};
