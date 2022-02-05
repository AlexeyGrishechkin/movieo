export const getNameFromList = (list = []) => {
  const filterList = list.filter((item) => item.name);

  if (filterList.length === 0) {
    return "no data";
  }

  return filterList.map((item) => item.name).join(", ");
};
