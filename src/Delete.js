import React, { useState } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuid } from "uuid";

function TodoList() {
  const [items, setItems] = useState([
    { id: uuid(), text: "Banana" },
    { id: uuid(), text: "Apple" },
    { id: uuid(), text: "Patato" },
    { id: uuid(), text: "Mango" },
  ]);
  return (
    <Container style={{ marginTop: "2rem" }} className="container">
      <ListGroup style={{ marginBottom: "1rem" }}>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition key={id} timeout={500} classNames="item">
              <ListGroup.Item>
                <Button
                  className="remove-btn"
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    setItems((items) => items.filter((item) => item.id !== id))
                  }
                >
                  &times;
                </Button>
                {text}
              </ListGroup.Item>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
      <Button
        onClick={() => {
          const text = prompt("Enter some text");
          if (text) {
            setItems((items) => [...items, { id: uuid(), text }]);
          }
        }}
      >
        Add Your Lovely Fruit To The List
      </Button>
    </Container>
  );
}
export default TodoList;
