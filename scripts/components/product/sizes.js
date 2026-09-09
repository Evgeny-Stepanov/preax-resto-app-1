import { createElement } from "../../base/elements.js";

export const createSizesElement = () => {
  const sizesElement = createElement("fieldset", "product__sizes");

  const titleElement = createElement("legend", "product__sizes-title");
  titleElement.textContent = "Размер";

  sizesElement.append(titleElement);

  return sizesElement;
};
