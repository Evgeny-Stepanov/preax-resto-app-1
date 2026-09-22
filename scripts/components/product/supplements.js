import {
  createElement,
  createInputElement,
  createPictureElement,
  createA11yElement,
  createSpriteIconElement,
} from "../../base/elements.js";

import { dishesSupplementsMap } from "../../base/constants.js";

import { GRAM_PLURAL_FORMS, RUB_PLURAL_FORMS } from "../../base/plural.js";

export const createSupplementsElement = (dishSupplementsIds, currency) => {
  const cssClasses = {
    supplements: "product__supplements",
    supplementsTitle: "product__supplements-title",
    supplementsWrapper: "product__supplements-wrapper",
    supplement: "product__supplement supplement",
    supplementPicture: "supplement__image",
    supplementWeight: "supplement__weight",
    supplementCheckbox: "supplement__checkbox",
    supplementText: "supplement__text",
    supplementDescription: "supplement__description",
    supplementPrice: "supplement__price",
  };
  const checkboxIconPath = "images/sprite.svg#checkbox";

  const supplementsElement = createElement("fieldset", cssClasses.supplements);

  const supplementsTitleElement = createElement(
    "legend",
    cssClasses.supplementsTitle,
  );
  supplementsTitleElement.textContent = "Добавки";

  supplementsElement.append(supplementsTitleElement);

  const supplementsWrapperElement = createElement(
    "div",
    cssClasses.supplementsWrapper,
  );

  dishSupplementsIds.forEach((item) => {
    const supplementOption = dishesSupplementsMap.get(item);
    const { id, title, img, g: weight, price } = supplementOption;

    const imagePath = img ? img : "images/supplements/placeholder.jpg";

    const supplementElement = createElement("label", cssClasses.supplement);

    const inputElement = createInputElement({
      className: "visually-hidden",
      type: "checkbox",
      name: id,
    });

    supplementElement.append(inputElement);

    const pictureElement = createPictureElement({
      width: 158,
      height: 158,
      jpgSrc: imagePath,
      alt: title,
      className: cssClasses.supplementPicture,
    });

    if (weight !== null) {
      const weightElement = createElement("span", cssClasses.supplementWeight);
      weightElement.textContent = `${weight} г`;
      weightElement.setAttribute("aria-hidden", "true");

      const a11yWeightElement = createA11yElement(weight, GRAM_PLURAL_FORMS);

      supplementElement.append(weightElement, a11yWeightElement);
    }

    const checkboxElement = createElement(
      "span",
      cssClasses.supplementCheckbox,
    );

    const svgElement = createSpriteIconElement({
      width: 9,
      height: 7,
      href: checkboxIconPath,
    });

    checkboxElement.append(svgElement);

    const textElement = createElement("span", cssClasses.supplementText);

    const descriptionElement = createElement(
      "span",
      cssClasses.supplementDescription,
    );
    descriptionElement.textContent = title;

    const priceElement = createElement("span", cssClasses.supplementPrice);
    priceElement.textContent = `+${price} ${currency}`;
    priceElement.setAttribute("aria-hidden", "true");

    const a11yPriceElement = createA11yElement(price, RUB_PLURAL_FORMS);

    textElement.append(descriptionElement, priceElement, a11yPriceElement);

    supplementElement.append(checkboxElement, pictureElement, textElement);

    supplementsWrapperElement.append(supplementElement);
  });

  supplementsElement.append(supplementsWrapperElement);

  return supplementsElement;
};
