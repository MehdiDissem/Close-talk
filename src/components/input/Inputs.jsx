import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";

const Inputs = (props) => {
  const [message, getMessage] = useState("");
  const [test, setTest] = useState(false);

  const postMessage = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:3000/post", {
        message: message,
        name: props.user,
        room: props.RoomNumber * 1,
        password: props.checkPassword,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <form className="input" onSubmit={postMessage}>
        <p className="myName"> Welcome {props.user}</p>
        <input
          className="input"
          placeholder="Your message here"
          onChange={(e) => getMessage(e.target.value)}
        />
        <button className="a">Send</button>
      </form>
    </div>
  );
};

export default Inputs;
