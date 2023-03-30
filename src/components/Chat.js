import { Container, Grid, TextField, Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import "../style/Chat.css";
import {
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import Message from "./Message";

const Chat = () => {
  const { auth, database } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const collections = collection(database, "messages");

  const getData = async () => {
    let allMessages = await getDocs(query(collections, orderBy("createdAt")));
    allMessages = allMessages.docs;

    setMessages([...allMessages]);
  };

  useEffect(() => {
    getData();
  });

  const sendMessage = async () => {
    if (value !== "") {
      await addDoc(collections, {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: serverTimestamp(),
      });
      setValue("");
    }
  };

  return (
    <Container>
      <Grid className="chat-container">
        <div className="chat-main">
          {messages.map((message) => {
            return <Message message={message} key={Math.random()} />;
          })}
        </div>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            maxRows={2}
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendMessage} variant="outlined">
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
