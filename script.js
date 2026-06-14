const promoCloseButtonElement = document.querySelector(".promo__button");

const promoCloseButtonHandleClick = () => {
  promoCloseButtonElement.addEventListener("click", (event) => {
    const promoElement = event.currentTarget.closest(".promo");

    hideElement(promoElement);
  });
};

const hideElement = (element) => {
  if (!(element instanceof HTMLElement)) {
    throw new Error("Аргумент не является HTML-элементом");
  }

  element.classList.add("hide");
};

promoCloseButtonHandleClick();
