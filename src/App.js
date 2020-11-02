import React, { useState, useEffect } from "react";
import { Input, FormControl, InputLabel, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./App.css";
import Message from "./Message";
import firebase from "firebase";
import db from "./firebase";
import img from "./messanger.jpg";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{}]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    var a = prompt("Set Username");
    if (a) {
      setUsername(a);
    } else {
      setUsername("Unknown User");
    }
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img src={img} alt="img" width="200px" />
      <h2 style={{ color: "green" }}>Welcome {username} 🚀 </h2>
      <form className="app_form">
        <FormControl className="input_field">
          <InputLabel htmlFor="my-input">Type Something..</InputLabel>
          <Input
            className="app_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="icon_input"
            disabled={!input}
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
