import React, { useState } from "react";
import Chat from "./Chat";
import Login from "./Login/Login";
import Inputs from "./input/Inputs";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

const App = () => {
  const [view, setView] = useState("Login");
  const [input, setInput] = useState("Login");
  const [room, setRoom] = useState("");
  const [username, getUsername] = useState("");
  const [fetchAgain, getFetch] = useState("");
  const [password, setPassword] = useState("");

  const checkPassword = (password) => {
    setPassword(password);
  };

  const changeView = (view) => {
    setView(view);
  };

  const fetchh = (param) => {
    getFetch(param);
  };

  const popInput = (input) => {
    setInput(input);
  };

  const getRoom = (room) => {
    setRoom(room);
  };

  const showUsername = (username) => {
    getUsername(username);
  };

  return (
    <div className="chatbox">
      <div>
        {" "}
        <h1 className="h1">Messaging App</h1>
      </div>
      {view === "Login" && (
        <Login
          changeView={changeView}
          getRoom={getRoom}
          popInput={popInput}
          showUser={showUsername}
          checkPassword={checkPassword}
        />
      )}
      {view === "Chat" && (
        <Chat RoomNumber={room} user={username} fetchAgain={fetchh} />
      )}
      {input === "Inputs" && (
        <Inputs
          user={username}
          RoomNumber={room}
          checkPassword={password}
          fetch={fetchAgain}
        />
      )}
    </div>
  );
};

export default App;
