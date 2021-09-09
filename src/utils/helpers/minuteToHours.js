import moment from "moment";

export const minuteToHours = (minutes) => {
  return moment.utc().startOf("day").add({ minutes }).format("HH:mm");
};
