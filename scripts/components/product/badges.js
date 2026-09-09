import { createElement, createSpriteIconElement } from "../../base/elements.js";

export const createBadgesElement = ({ allBadges, dishBadgeIds }) => {
  const badgesElement = createElement("ul", "product__badges");

  dishBadgeIds.forEach((badgeId) => {
    const badge = allBadges.find(({ id }) => id === badgeId);
    const { icon, title } = badge;

    const modifierName = icon.split("#")[1];

    const badgeElement = createElement(
      "li",
      `badge badge--${modifierName} product__badge`,
    );

    const textElement = createElement("p");
    textElement.textContent = title;

    const svgElement = createSpriteIconElement({
      width: 16,
      height: 16,
      href: icon,
    });

    badgeElement.append(svgElement, textElement);
    badgesElement.append(badgeElement);
  });

  return badgesElement;
};
