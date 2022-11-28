import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";

const Login = (props) => {
  const [errorMessages, setErrorMessages] = useState({});

  const [data, getData] = useState([]);
  const [username, getuserName] = useState("");
  const [password, getPassword] = useState("");
  const [room, getRoom] = useState("");
  const [checked, passCheck] = useState(false);

  const renderErrorMessage = () => username === errorMessages.username;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/talk")
      .then((res) => getData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    for (var i = 0; i < data.length; i++) {
      if (data[i].name === username && data[i].password !== password) {
        return passCheck(true);
      }
    }
    handleCheck();
  };

  const handleCheck = () => {
    if (checked === true) {
      renderErrorMessage();
    } else {
      axios
        .post("http://127.0.0.1:3000/post", {
          name: username,
          password: password,
          room: room,
        })
        .then((res) => {
          props.changeView("Chat");
          props.getRoom(room);
          props.showUser(username);
          props.popInput("Inputs");
          props.checkPassword(password);
        });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(e) => getuserName(e.target.value)}
          />
          {checked && (
            <div>
              Your ID already exists, please put the right password or create a
              new ID.
            </div>
          )}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => getPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Room </label>
          <input
            type="number"
            name="pass"
            required
            onChange={(e) => getRoom(e.target.value)}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
