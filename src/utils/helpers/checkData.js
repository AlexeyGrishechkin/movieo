export const checkData = (data, rest) => {
  if (!data) {
    return "-";
  }

  return `${data} ${rest}`;
};
