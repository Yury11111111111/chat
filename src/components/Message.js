import { Avatar, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import "../style/Chat.css";

const Message = (props) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div
      className={
        props.message._document.data.value.mapValue.fields.uid.stringValue ===
        user?.uid
          ? "message__user"
          : "message__other"
      }
    >
      <Grid container>
        <Avatar
          src={
            props.message._document.data.value.mapValue.fields.photoURL
              .stringValue
          }
        />
        <div>
          {
            props.message._document.data.value.mapValue.fields.displayName
              .stringValue
          }
        </div>
      </Grid>
      <div>
        {props.message._document.data.value.mapValue.fields.text.stringValue}
      </div>
    </div>
  );
};

export default Message;
