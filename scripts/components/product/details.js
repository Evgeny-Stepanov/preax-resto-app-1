import { createElement } from "../../base/elements.js";
import { createFormElement } from "./form.js";
import { createHeaderElement } from "./header.js";

export const createDetailsElement = ({
  allBadges,
  dishBadgeIds,
  title,
  description,
  sizes,
  currency,
  dishSupplementsIds,
}) => {
  const cssClasses = {
    details: "product__details",
    description: "product__description",
  };

  const detailsElement = createElement("div", cssClasses.details);

  const headerElement = createHeaderElement({
    allBadges,
    dishBadgeIds,
    title,
    sizes,
  });

  detailsElement.append(headerElement);

  const descriptionElement = createElement("p", cssClasses.description);
  descriptionElement.textContent = description;

  detailsElement.append(descriptionElement);

  const formElement = createFormElement({
    sizes,
    currency,
    dishSupplementsIds,
  });

  detailsElement.append(formElement);

  return detailsElement;
};
