import React, { useState } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MessageSeparator
} from "@chatscope/chat-ui-kit-react";



function Chat() {
  function handleSend(x) {
    // Logger user (sender)
    console.log(x);
    setMessageInputValue("")
  }
  const [messageInputValue, setMessageInputValue] = useState("");
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Eliot",
                direction: "incoming",
                position: "single",
              }}
            />
            <MessageSeparator content="Saturday, 31 November 2019" />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Eliot",
                direction: "outgoing",
                position: "single",
              }}
            />
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
