import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { addUser } from "../redux/actions/index";

const AddUser = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleTextChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(formState));
    history.push("/");
  };

  return (
    <Fragment>
      <h2>Add User</h2>

      <form name="form" onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Name: </label>
            <input
              autoComplete="name"
              name="name"
              type="text"
              onChange={handleTextChange}
              autoFocus
            />
          </div>
          <div>
            <label>Email : </label>
            <input
              autoComplete="off"
              name="email"
              type="email"
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label>Phone : </label>
            <input
              autoComplete="phone"
              name="phone"
              type="number"
              onChange={handleTextChange}
            />
          </div>
          <Button
            type="submit"
            style={{ marginRight: "10px", marginTop: "10px" }}
          >
            Submit
          </Button>
          <Button
            style={{ marginTop: "10px" }}
            onClick={() => history.push("/")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default AddUser;
