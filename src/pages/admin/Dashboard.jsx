import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Center } from "../../components";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const getUserData = async () => {
    const URL = "http://localhost:5000/users";
    const { data } = await axios.get(URL);
    setUsers(data);
    // console.log(data);
    setAllUsers(data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const fillterUser = (type) => {
    switch (type) {
      case "active": {
        return setUsers(allUsers.filter((item) => item.active));
      }
      case "admin": {
      }
      case "all": {
      }

      default:
        return "";
    }
  };

  return (
    <Center>
      <div className="my-4 d-flex justify-content-between">
        <Button onClick={(e) => fillterUser()}>Active</Button>
        <Button>Admin</Button>
        <Button>All</Button>
      </div>

      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.userEmail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Center>
  );
}
