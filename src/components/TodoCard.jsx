import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function TodoCard({ item, getAllClasses,setchange,change}) {

  const [show, setshow] = useState(false)
  const [update, setupdate] = useState([])

  const handleUpdate = async () => {
    const {id} = update
    console.log(id);
    const URL = `http://localhost:5000/todos/${id}`;
    const { data } = await axios.put(URL,update);
    // console.log(data);
    setchange(update)
  };
  const deleteTodo = async (id) => {
   
    
    const URL = `http://localhost:5000/todos/${id}`;
    const { data } = await axios.delete(URL);
    console.log(data);
    setchange(id)
  };

  return (
    <>
      
      <Card className="mt-4" style={{ width: "" }}>
        <table class="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Todo Task</th>
              <th scope="col">Todo Description</th>
              <th scope="col">update Todo</th>
              <th scope="col">Delete Todo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Card.Header className={getAllClasses(item.pariority)}>
                  {item.task}
                </Card.Header>
              </th>
              <td>
                {" "}
                <Card.Body>{item.desc}</Card.Body>
              </td>
              <td>
               
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#updateModal"
                  type="button"
                  class="btn btn-primary"
                  onClick={e =>{
                    setshow(show ?false : true)
                    setupdate(item)
                  }}
                >
                  Update
                </button>
              </td>
              <td>
                <Button onClick={e =>deleteTodo(item.id)} variant="danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      
      {
        show && <div>
             <input value={update.task} type="text" onChange={e =>setupdate({...update,task:e.target.value})}  name="" id="" /><br />
             <input value={update.desc} type="text" onChange={e =>setupdate({...update,desc:e.target.value})} name="" id="" />
             <br />
             <button onClick={e=>{
              handleUpdate()
              setshow(show ?false : true)
              }}>upadte</button>
        </div>
      }
    </>
  );
}
