const selectors = {
  modal: ".modal",
  content: ".modal__content",
  closeButton: ".modal__button",
};

const modalElement = document.querySelector(selectors.modal);
const contentElement = modalElement.querySelector(selectors.content);

export const renderModal = (htmlElement) => {
  if (!modalElement || !contentElement || !htmlElement) {
    console.error("Ошибка вызова модального окна");
    return;
  }

  contentElement.append(htmlElement);

  modalElement.showModal();
  modalElement.getBoundingClientRect();
  modalElement.classList.add("open");
};

const handleTransitionEnd = ({ target, propertyName }) => {
  if (target === modalElement && propertyName === "opacity") {
    modalElement.close();
    contentElement.replaceChildren();
    modalElement.removeEventListener("transitionend", handleTransitionEnd);
    document.dispatchEvent(new CustomEvent("modal:close"));
  }
};

const closeModal = () => {
  modalElement.classList.remove("open");
  modalElement.addEventListener("transitionend", handleTransitionEnd);
};

export const closeModalByClick = ({ target }) => {
  if (!modalElement && !modalElement.hasAttribute("open")) {
    return;
  }

  const isCloseButtonClicked = target.closest(selectors.closeButton);
  const isOverlayClicked = target === modalElement;

  if (isCloseButtonClicked || isOverlayClicked) {
    closeModal();
  }
};

export const closeModalByKeyDown = (event) => {
  if (!modalElement) {
    return;
  }

  if (modalElement.hasAttribute("open") && event.key === "Escape") {
    event.preventDefault();
    closeModal();
  }
};
