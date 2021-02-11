import { GET_USER_PROFILE } from "../helpers/stringHelper";

export const initialValue = {
  loading: true,
  error: "",
  user: {},
};

export const userProfileReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_PROFILE:
      return payload;
    default:
      return state;
  }
};
