import { pluralize } from "./plural.js";

export const createElement = (type, className) => {
  const isSvg = type === "svg" || type === "use";

  const element = isSvg
    ? document.createElementNS("http://www.w3.org/2000/svg", type)
    : document.createElement(type);

  if (className) {
    className.split(" ").forEach((cls) => element.classList.add(cls));
  }

  return element;
};

export const createA11yElement = (number, pluralForms) => {
  const a11yElement = createElement("span", "visually-hidden");
  a11yElement.textContent = `${number} ${pluralize(number, pluralForms)}`;

  return a11yElement;
};

export const createPictureElement = ({
  width,
  height,
  jpgSrc,
  alt,
  className,
  fallbackSrc,
}) => {
  const pictureElement = createElement("picture", className);

  const imageElement = createElement("img");
  imageElement.alt = alt;
  imageElement.setAttribute("width", width);
  imageElement.setAttribute("height", height);

  if (fallbackSrc) {
    imageElement.addEventListener("error", () => {
      if (imageElement.getAttribute("src") === fallbackSrc) {
        imageElement.onerror = null;
        return;
      }
      imageElement.src = fallbackSrc;
    });
  }

  imageElement.src = jpgSrc;

  const webpSrc = jpgSrc.replace(/\.[^/.]+$/, ".webp");
  const probe = new Image();

  probe.onload = () => {
    const sourceElement = createElement("source");
    sourceElement.setAttribute("srcset", webpSrc);
    sourceElement.setAttribute("type", "image/webp");
    pictureElement.prepend(sourceElement);
  };

  probe.src = webpSrc;

  pictureElement.append(imageElement);

  return pictureElement;
};

export const createSpriteIconElement = ({
  width,
  height,
  href,
  className,
  ariaHidden = true,
}) => {
  const svgElement = createElement("svg", className);

  svgElement.setAttribute("width", width);
  svgElement.setAttribute("height", height);

  if (ariaHidden === true) {
    svgElement.setAttribute("aria-hidden", ariaHidden);
  }

  const useElement = createElement("use");
  useElement.setAttribute("href", href);

  svgElement.append(useElement);

  return svgElement;
};

export const createInputElement = ({ className, type, id, name, value }) => {
  const inputElement = createElement("input", className);

  inputElement.setAttribute("type", type);

  if (id) {
    inputElement.setAttribute("id", id);
  }

  inputElement.setAttribute("name", name);

  if (value) {
    inputElement.setAttribute("value", value);
  }

  return inputElement;
};

export const createButtonElement = (className, type = "button") => {
  const buttonElement = createElement("button", className);

  buttonElement.setAttribute("type", type);

  return buttonElement;
};
