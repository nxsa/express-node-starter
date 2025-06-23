import * as yup from "yup";
import dayjs from "dayjs";
/* import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const createDateValidator = (fieldName: string = "Date") =>
  yup
    .string()
    .required(`${fieldName} is required`)
    .test("is-valid-date", "Invalid date format", (value) => {
      return dayjs(value, "D MMMM, YYYY HH:mm", true).isValid();
    })
    .test(
      "not-future-date",
      `${fieldName} cannot be in the future`,
      (value) => {
        return dayjs(value).isBefore(dayjs());
      }
    ); */

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email address must be a valid email")
    .required("Email address is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
