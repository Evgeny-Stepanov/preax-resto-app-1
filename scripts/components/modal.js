export const MODAL_SELECTOR = ".modal";

export const renderModal = (htmlElement) => {
  const selectors = {
    modal: MODAL_SELECTOR,
    content: ".content",
  };

  const modalElement = document.querySelector(selectors.modal);

  if (!modalElement || !htmlElement) {
    console.error("Ошибка вызова модального окна");
    return;
  }

  const contentElement = modalElement.querySelector(selectors.content);
  contentElement.append(htmlElement);

  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.setProperty("padding-right", `${scrollbarWidth}px`);

  modalElement.showModal();
};
