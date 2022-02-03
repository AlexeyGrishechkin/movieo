export const expandList = (list = []) => {
  const filterList = list.filter((item) => item.name);

  if (list.length === 0 || filterList.length === 0) {
    return "no data";
  }

  return filterList.map((item) => item.name).join(", ");
};
