export const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Ошибка сервера! Статус: ${response.status} (${response.statusText})`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Детали ошибки при получении данных:", error.message);
    return null;
  }
};

export const setOwnHeight = (htmlElement) => {
  htmlElement.style.height = htmlElement.offsetHeight + "px";
};

export const handleCardClick = (cardElement, callback) => {
  if (!cardElement) {
    return;
  }

  callback();
};

export const getDetailsFromDatabase = (id, database) =>
  database.find((data) => data.id === id);
