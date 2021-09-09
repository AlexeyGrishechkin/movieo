export const checkData = (data, rest) => {
  if (data === 0 || data === null) {
    return "-";
  }
  return `${data} ${rest}`;
};
