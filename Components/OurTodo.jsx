import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { addTodo, RemoveTodo } from "../Slices/counter/todoSlice";
import { increment, decrement } from "../Slices/counter/counterSlice";


const OurTodo = () => {
  const [input, setInput] = useState("");
  const [checkedState, setCheckedState] = useState(false);
  const state = useSelector((state) => state);  // todo is state and todos is initil state 
  const dispatch = useDispatch();




// add todos 
  const handleAdd = (e) => {
    e.preventDefault();
   
     // Check if input is empty
  if (!input.trim()) {
    return; 
  }
    dispatch(addTodo(input));
    dispatch(increment()); 
    setInput("");
  };
  
//   delete
  const handleDelete = (index) => {
    dispatch(RemoveTodo(index));
    dispatch(decrement()); 
  };

  const handleCheckboxToggle = (index) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of the checkbox at the given index
    }));
  };

  return (
    <div>
      <Container className="my-5">
        <h1 className="my-3">Our Todo App</h1>
        <Row className="my-5">
          <Col lg={6} className="d-flex m-auto">
            <Form.Control
              value={input}
              name = "input"
              onChange={(e) => setInput(e.target.value)}
              placeholder="First name"
              type="email"
            />
            <Button onClick={(e) => handleAdd(e)} variant="danger">
             Add
            </Button>{" "}
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          <Col lg={6} className="m-auto">  
            {state.todo.todos && 
             state.todo.todos.map((item, index) => { // todo is state and todos is initil state 
                return (
                  <div
               
                    className=" text-wrap d-flex justify-content-between align-items-center shadow p-3 rounded mb-3"
                  >
                    <div className="d-flex">
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxToggle(index)}
                        checked={checkedState[index] || false} // Set checked state based on checkedState object
                      />
                <h3 className={`ms-2 mb-0 pb-0 ${checkedState[index] ? 'line-through' : ''}`}>{item}</h3>
                    </div>
                    <DeleteRoundedIcon
                      onClick={() => handleDelete(index)}
                      className="text-danger"
                    />
                  </div>
                );
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTodo;
