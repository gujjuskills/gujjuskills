import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (date) => {
  return formatInTimeZone(date, "Asia/Kolkata", "dd/MM/yyyy");
};

export default dateFormat;
