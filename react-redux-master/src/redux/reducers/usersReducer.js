import * as type from "../actions/constants/action-type";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.getUsers:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case type.addUser:
      return {
        ...state,
        loading: false,
      };
    case type.getSingleUser:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case type.updateUser:
      return {
        ...state,
        loading: false,
      };
    case type.deleteUser:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
