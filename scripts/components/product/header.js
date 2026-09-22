import { createElement, createA11yElement } from "../../base/elements.js";
import { createBadgesElement } from "./badges.js";
import { GRAM_PLURAL_FORMS } from "../../base/plural.js";

export const createHeaderElement = ({
  allBadges,
  dishBadgeIds,
  title,
  sizes,
}) => {
  const cssClasses = {
    header: "product__header",
    title: "product__title",
    weight: "product__weight",
  };

  const headerElement = createElement("div", cssClasses.header);

  if (dishBadgeIds.length) {
    const badgesElement = createBadgesElement(allBadges, dishBadgeIds);

    headerElement.append(badgesElement);
  }

  const titleElement = createElement("h2", cssClasses.title);
  titleElement.textContent = title;

  headerElement.append(titleElement);

  if (sizes.length === 1) {
    const weight = sizes[0].g;
    const weightElement = createWeightElement(weight, cssClasses.weight);

    headerElement.append(weightElement);
  }

  return headerElement;
};

const createWeightElement = (weight, className) => {
  const weightElement = createElement("p", className);

  const visibleElement = createElement("span");
  visibleElement.textContent = `${weight} г`;
  visibleElement.setAttribute("aria-hidden", "true");

  const a11yElement = createA11yElement(weight, GRAM_PLURAL_FORMS);

  weightElement.append(visibleElement, a11yElement);

  return weightElement;
};
