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

export const createPictureElement = ({
  width,
  height,
  jpgSrc,
  alt,
  className,
}) => {
  const pictureElement = createElement("picture", className);

  const sourceElement = createElement("source");
  sourceElement.setAttribute("srcset", jpgSrc.replace(/\.[^/.]+$/, ".webp"));
  sourceElement.setAttribute("type", "image/webp");

  const imageElement = createElement("img");
  imageElement.src = jpgSrc;
  imageElement.alt = alt;
  imageElement.setAttribute("width", width);
  imageElement.setAttribute("height", height);

  pictureElement.append(sourceElement, imageElement);

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
