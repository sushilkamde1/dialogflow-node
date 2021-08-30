import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";

export default function App() {
  const [load, setLoad] = useState("Loading...");
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => {
        setLoad("success");
        setList(res.data);
      })
      .catch((err) => {
        setLoad("Failed");
      });
  }, []);

  return (
    <div>
      <h1>Dialogflow Intent List</h1>
      <div>{load}</div>
      {list.map((intent, index) => (
        <div className="intent" key={index}>
          {intent.displayName}
        </div>
      ))}
    </div>
  );
}
