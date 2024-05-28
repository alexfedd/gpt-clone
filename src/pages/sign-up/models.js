import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  email: yup.string().email("Wrong email").required("Email is required"),
  username: yup.string().required(),
  password: yup
    .string()
    .min(8, "Password length is atleast 8 characters")
    .required("Password is required")
});
