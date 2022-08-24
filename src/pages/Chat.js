import React, { useState } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";

const DATA = [
  {
    key: 1,
    message: "Hello there",
    direction: "outgoing",
    position: "single",
  },
  {
    key: 2,
    message: "Hi",
    direction: "incoming",
    position: "single",
  },{
    key: 3,
    message: "Hello there",
    direction: "outgoing",
    position: "single",
  },
  {
    key: 4,
    message: "Hi",
    direction: "incoming",
    position: "single",
  },{
    key: 5,
    message: "Hello there",
    direction: "outgoing",
    position: "single",
  },
];

function Chat() {
  function handleSend(x) {
    // Logger user (sender)
    console.log(x);
    DATA.push({key:DATA.length+1, message:x, direction:'outgoing', position:"single"});
    setMessageInputValue("");
  }
  const [messageInputValue, setMessageInputValue] = useState("");
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {DATA.map((item) => (
              <Message
                model={item}
              />
            ))}
          </MessageList>
          <MessageInput
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
            onSend={() => handleSend(messageInputValue)}
            placeholder="Type message here"
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default Chat;
