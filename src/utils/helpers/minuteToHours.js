import moment from "moment";

export const minuteToHours = (minutes) =>  moment.utc().startOf("day").add({ minutes }).format("HH:mm");
