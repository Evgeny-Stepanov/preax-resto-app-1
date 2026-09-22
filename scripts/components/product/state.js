export const orderState = {
  sizeValue: "",
  supplementsIds: new Set(),
};

export const resetOrderState = () => {
  orderState.sizeValue = "";
  orderState.supplementsIds.clear();
};
