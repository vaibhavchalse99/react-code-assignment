import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

export const initialValue = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

export const loginReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "updateEmail":
      return { ...state, email: payload.email, emailError: "" };
    case "updatePassword":
      return { ...state, password: payload.password, passwordError: "" };
    case "updateEmailError":
      return { ...state, emailError: payload.emailError };
    case "updatePasswordError":
      return { ...state, passwordError: payload.passwordError };
    default:
      return state;
  }
};
