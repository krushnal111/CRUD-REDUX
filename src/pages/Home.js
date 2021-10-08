import React, { useEffect } from "react";
import { Table, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteUser, loadUsers } from "../redux/actions/index";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const userDelete = (id) => {
    if (window.confirm("Are your sure wanted to delete user ?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <div>
      <div>
        <Button onClick={() => history.push("/adduser")}>Add User</Button>
      </div>
      <Table striped>
        <thead border="3">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody border="3">
          {users &&
            users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Button
                    style={{ marginRight: "10px" }}
                    className="btn btn-success "
                    onClick={() => history.push(`/updateuser/${user.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn btn-danger "
                    onClick={() => {
                      userDelete(user.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
