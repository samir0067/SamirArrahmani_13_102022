import { object, string } from "yup";

export const errorsMessage = {
  requiredMsg: "Please complete this field",
  requiredPassword: "Please enter a password",
  minPassword: "Field must be at least 6 characters",
};

/**
 * function to define the validation rules of the fields
 */
export const signInSchema = object().shape({
  email: string().required(errorsMessage.requiredMsg).trim(),
  password: string()
    .min(6, errorsMessage.minPassword)
    .required(errorsMessage.requiredPassword)
    .trim(),
});

export const profileSchema = object().shape({
  firstName: string().required(errorsMessage.requiredMsg).trim(),
  lastName: string().required(errorsMessage.requiredMsg).trim(),
});
