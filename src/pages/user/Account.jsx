import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Center } from "../../components";
import CategoryCount from "../../components/CategoryCount";
import PriorityCount from "../../components/PriorityCount";
import TodoCard from "../../components/TodoCard";

export default function Account() {
  const [change, setchange] = useState([])
 
  const [getData, setGetData] = useState([]);
  const [alltodos, setAlltodos] = useState([]);
  const getAllTodos = async () => {
    const URL = "http://localhost:5000/todos";
    const { data } = await axios.get(URL);
    setGetData(data);
    setAlltodos(data);
  };
  useEffect(() => {
    getAllTodos();
  }, [change]);

  const getAllClasses = (pariority) => {
    switch (pariority) {
      case "High":
        return "bg-danger";
      case "Med":
        return "bg-warning";
      case "Low":
        return "bg-success";

      default:
        return "";
    }
  };

  const filterTodos = (pri) =>
    pri === "all"
      ? setGetData(alltodos)
      : setGetData(alltodos.filter((item) => item.pariority == pri));

  return (
    <>
      <center>
        <CategoryCount getData={getData} />
        <PriorityCount getData={getData} filterTodos={filterTodos} />

        {getData.map((item) => (
          <TodoCard item={item} getAllClasses={getAllClasses} setchange={setchange} change={change} />
        ))}
      </center>

      {/* {
        show &&  <div>
            <input type="text" />
            <br />
            <input type="text" />
        </div>
      } */}
    </>
  );
}
