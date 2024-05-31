import { useEffect, useRef, useState } from "react";
import Message from "./components/message/Message";
import ScrollToBottom from "./components/scrollToBottom/ScrollToBottom";
import TextInput from "./components/textInput/TextInput";
import "./style.scss";
import { useGetMessagesByChatID } from "./hooks/useGetMessagesByChatID";
import { useParams } from "react-router-dom";
import { getCookieByName } from "../../common/utils";
function Chat() {
  const messagesContainer = useRef(0);
  const username = JSON.parse(getCookieByName('user')).username
  const bottomRef = useRef(0);
  const {chatId} = useParams()
  const {data: chatMessages, error, isPending} = useGetMessagesByChatID(chatId)
  const [messagesList, setMessagesList] = useState()
  console.log(messagesList, chatMessages, error, isPending);
  useEffect(() => {
    setMessagesList(chatMessages?.data)
    bottomRef.current.scrollIntoView();
  }, [chatMessages]);
  useEffect(() => {
    bottomRef.current.scrollIntoView();
  }, [messagesList]);
  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__messages" ref={messagesContainer}>
          {messagesList?.map((message, key) => {
            return (
              <Message
                key={key}
                senderId={message.senderId}
                message={message.contents}
                username={username}
              />
            );
          })}
        </div>
        <div className="chat__text-input-wrapper">
          <div className="chat__text-input">
            <TextInput
              messagesRef={messagesContainer}
              bottomRef={bottomRef}
              addNewMessage={setMessagesList}

            />
          </div>
        </div>
      </div>
      <ScrollToBottom bottomRef={bottomRef} />
    </div>
  );
}

export default Chat;
