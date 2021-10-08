import * as type from "./constants/action-type";
import axios from "axios";

const getUsers = (users) => ({
  type: type.getUsers,
  payload: users,
});

const userAdded = (user) => ({
  type: type.addUser,
  payload: user,
});

const userUpdated = () => ({
  type: type.updateUser,
});
const userDeleted = () => ({
  type: type.deleteUser,
});

const getUser = (user) => ({
  type: type.getSingleUser,
  payload: user,
});
export const loadUsers = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/users`)
      .then((response) => {
        dispatch(getUsers(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  console.log(user);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/users`, user)
      .then(() => {
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (user, id) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/users/${id}`, user)
      .then((response) => {
        dispatch(userUpdated());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((response) => {
        dispatch(getUser(response.data));
      })
      .catch((error) => console.log(error));
  };
};
