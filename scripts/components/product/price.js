import { dishesSupplementsMap } from "../../base/constants.js";
import { RUB_PLURAL_FORMS } from "../../base/plural.js";
import { createMap } from "../../base/utils.js";
import { orderState } from "./state.js";
import { pluralize } from "../../base/plural.js";

const cssClasses = {
  sizeInput: ".product__sizes input[name='size']",
  supplementInput: ".product__supplements input[type='checkbox']",
  visiblePrice: "span[aria-hidden='true']",
  a11yPrice: "span.visually-hidden",
};

const setOrderSize = (formElement, sizes) => {
  if (sizes.length > 1) {
    const checkedSizeValue = formElement.querySelector(
      `${cssClasses.sizeInput}:checked`,
    ).value;

    orderState.sizeValue = checkedSizeValue;

    return;
  }
  orderState.sizeValue = sizes[0].size;
};

const setOrderSupplements = (formElement) => {
  const checkedSupplementElements = formElement.querySelectorAll(
    `${cssClasses.supplementInput}:checked`,
  );

  orderState.supplementsIds.clear();

  checkedSupplementElements.forEach((checkedElement) =>
    orderState.supplementsIds.add(+checkedElement.name),
  );
};

const calculateTotalPrice = (sizes) => {
  const sizeMap = createMap(sizes, "size");

  let total = sizeMap.get(orderState.sizeValue).price;

  orderState.supplementsIds.forEach((id) => {
    total += dishesSupplementsMap.get(id).price;
  });

  return total;
};

const renderTotalPrice = ({ priceElement, totalPrice, currency }) => {
  const visibleElement = priceElement.querySelector(cssClasses.visiblePrice);
  visibleElement.textContent = `${totalPrice} ${currency}`;

  const a11yElement = priceElement.querySelector(cssClasses.a11yPrice);
  a11yElement.textContent = `${totalPrice} ${pluralize(totalPrice, RUB_PLURAL_FORMS)}`;
};

export const calculatePrice = ({
  formElement,
  priceElement,
  sizes,
  currency,
}) => {
  setOrderSize(formElement, sizes);
  setOrderSupplements(formElement);

  const totalPrice = calculateTotalPrice(sizes);

  renderTotalPrice({ priceElement, totalPrice, currency });
};
