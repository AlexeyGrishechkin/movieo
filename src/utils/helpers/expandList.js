export const expandList = (list = []) => {
  return list.map((item) => item.name).join(", ");
};
