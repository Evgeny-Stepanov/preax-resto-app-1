import { createElement } from "../../base/elements.js";
import { createBadgesElement } from "./badges.js";
import { pluralizeIntl, GRAM_PLURAL_FORMS } from "../../base/plural.js";

export const createHeaderElement = ({
  allBadges,
  dishBadgeIds,
  title,
  sizes,
}) => {
  const headerElement = createElement("div", "product__header");

  if (dishBadgeIds.length) {
    const badgesElement = createBadgesElement({ allBadges, dishBadgeIds });

    headerElement.append(badgesElement);
  }

  const titleElement = createElement("h2", "product__title");
  titleElement.textContent = title;

  headerElement.append(titleElement);

  if (sizes.length === 1) {
    const weight = sizes[0].g;

    const weightElement = createElement("p", "product__weight");
    weightElement.setAttribute(
      "aria-label",
      `${weight} ${pluralizeIntl(weight, GRAM_PLURAL_FORMS)}`,
    );
    weightElement.textContent = `${weight} г`;

    headerElement.append(weightElement);
  }

  return headerElement;
};
