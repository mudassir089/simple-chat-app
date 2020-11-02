import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import "./Message.css";

function Message({ username, message }) {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message_user"}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography variant="h6" component="h5">
            {!isUser && `${message.username || ".."}: `}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
