import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([{}]);
  useEffect(() => {
    axios.get("https://sshtht-springboot-mariadb.herokuapp.com/board/selectall").then((res) => {
      setItems([...res.data]);
    });
  }, []);
  return (
    <>
      {items.map((v, i) => (
        <li key={i}>{v.todoList}</li>
      ))}
    </>
  );
}

export default App;
