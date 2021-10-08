import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import { getSingleUser, updateUser } from "../redux/actions/index";

const UpdateUser = () => {
  const [formState, setFormState] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const history = useHistory();
  const { id } = useParams();
  const { name, email, phone } = formState;
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setFormState({ ...user });
    }
  }, [user]);

  const handleTextChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(formState, id));
    history.push("/");
  };

  return (
    <Fragment>
      <h2>Edit User</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Name: </label>
            <input
              autoComplete="name"
              name="name"
              type="text"
              value={name || ""}
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
              value={email || ""}
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label>Phone : </label>
            <input
              autoComplete="phone"
              name="phone"
              type="number"
              value={phone || ""}
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

export default UpdateUser;
