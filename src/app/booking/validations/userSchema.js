import * as yup from "yup";

export const userSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup
    .string()
    .matches(/^\+?\d{9,15}$/, "Invalid phone number")
    .required("Phone is required"),
  email: yup.string().email("Invalid email").notRequired(),
  comment: yup.string().max(300, "Max 300 characters").notRequired(),
});
