import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";
import "./App.css";

const AllChat = (props) => {
  const [admin, checkAdmin] = useState(true);
  const [update, getUpdate] = useState("");
  const checkUser = () => {
    if (props.user === "admin") {
      return checkAdmin(false);
    }
  };

  const handleDeleteProperty = () => {
    axios
      .delete(`http://127.0.0.1:3000/delete/${props.element._id}`)
      .then((res) => console.log(res));
  };

  const handleUpdate = (_id) => {
    axios
      .put(`http://localhost:3000/update/${props.element._id}`, {
        name: update,
      })
      .then((res) => console.log(res));
  };

  useEffect(() => checkUser(), []);
  return (
    <div className="message">
      <h2 className="h2">
        {props.element.name}
        {!admin && (
          <span>
            {" "}
            <input
            className="inp"
              placeholder="update here"
              onChange={(e) => getUpdate(e.target.value)}
            ></input>{" "}
            <button className="upBtn" onClick={handleUpdate}>
              Update
            </button>
          </span>
        )}
      </h2>
      <p className="p">
        {props.element.message}
        {!admin && <span onClick={handleDeleteProperty}>❌</span>}
      </p>
    </div>
  );
};

export default AllChat;
