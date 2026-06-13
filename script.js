const promoCloseButtonElement = document.querySelector(".promo__button");

const promoCloseButtonHandleClick = () => {
  promoCloseButtonElement.addEventListener("click", (event) => {
    const promoElement = event.currentTarget.closest(".promo");

    hideElement(promoElement);
  });
};

const hideElement = (element) => {
  element.classList.add("hide");
};

promoCloseButtonHandleClick();
