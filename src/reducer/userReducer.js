import { GET_USERS } from "../helpers/stringHelper";

export const initialValue = {
  loading: true,
  error: "",
  users: [],
};

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return payload;
    default:
      return state;
  }
};
