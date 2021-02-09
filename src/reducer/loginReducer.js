import * as yup from "yup";

import {
  UPDATE_EMAIL,
  UPDATE_EMAIL_ERROR,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
} from "../helpers/stringHelper";

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
    case UPDATE_EMAIL:
      return { ...state, email: payload.email, emailError: "" };
    case UPDATE_PASSWORD:
      return { ...state, password: payload.password, passwordError: "" };
    case UPDATE_EMAIL_ERROR:
      return { ...state, emailError: payload.emailError };
    case UPDATE_PASSWORD_ERROR:
      return { ...state, passwordError: payload.passwordError };
    default:
      return state;
  }
};
