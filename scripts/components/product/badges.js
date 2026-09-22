import { createElement, createSpriteIconElement } from "../../base/elements.js";

export const createBadgesElement = (allBadges, dishBadgeIds) => {
  const cssClasses = {
    badges: "product__badges",
    badge: "badge product__badge",
    iconWrapper: "product__badge-wrapper",
  };

  const badgesElement = createElement("ul", cssClasses.badges);

  dishBadgeIds.forEach((badgeId) => {
    const badge = allBadges.find(({ id }) => id === badgeId);
    const { icon, title } = badge;

    const modifierName = icon.split("#")[1];

    const badgeElement = createElement(
      "li",
      `${cssClasses.badge} badge--${modifierName}`,
    );

    const iconWrapperElement = createElement("span", cssClasses.iconWrapper);

    const svgElement = createSpriteIconElement({
      width: 16,
      height: 16,
      href: icon,
    });

    const textElement = createElement("p");
    textElement.textContent = title;

    iconWrapperElement.append(svgElement);
    badgeElement.append(iconWrapperElement, textElement);
    badgesElement.append(badgeElement);
  });

  return badgesElement;
};
