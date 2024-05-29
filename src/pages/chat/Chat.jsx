import { useEffect, useRef, useState } from "react";
import Message from "./components/message/Message";
import ScrollToBottom from "./components/scrollToBottom/ScrollToBottom";
import TextInput from "./components/textInput/TextInput";
import "./style.scss";
import { useGetMessagesByChatID } from "./hooks/useGetMessagesByChatID";
import { useParams } from "react-router-dom";
function Chat() {
  const messagesContainer = useRef(0);
  const bottomRef = useRef(0);
  const {chatId} = useParams()
  const {data: chatMessages} = useGetMessagesByChatID(chatId)
  console.log(chatMessages);
  const message =
    "Lorem ipsum dolor sit amet consectetur. Montes et tortor consequat iaculis porttitor magna vitae arcu. Amet faucibus vitae massa ullamcorper. Cursus adipiscing cursus semper maecenas lectus. Urna quis tincidunt massa etiam ac vitae mi nisi. Massa ac non varius amet turpis feugiat volutpat eu. Odio morbi bibendum faucibus posuere ut dapibus at dictum. Cursus nunc ut felis non eu cursus iaculis molestie sed. Sed ut bibendum dui pharetra. Elit ullamcorper consectetur et faucibus urna. Amet ipsum placerat senectus amet. Tincidunt porta rutrum eros duis vel. Scelerisque et ac dictum id fusce eget consectetur sed. Consectetur adipiscing enim facilisis vivamus sed cursus tempus. Sit ac id consectetur amet tempor. In aliquet urna eget diam tortor suscipit dapibus. Egestas fermentum in sem elementum suspendisse malesuada pharetra pulvinar. Arcu at eget habitant ullamcorper ullamcorper sit fusce. Eget neque amet nunc felis eget. Venenatis ultrices sodales posuere ornare ut quam lacus quis. Odio id pellentesque purus libero placerat tincidunt. Blandit ornare vehicula sit non. Hac aliquet quam quis ipsum risus ipsum ornare vulputate. Tempor feugiat quam egestas cras pharetra vestibulum arcu integer sit. Dictum aliquam vitae tincidunt sed arcu felis quam netus.";
  const [messages, setMessages] = useState([
    { sender: "Запрос", message: message },
    { sender: "Ответ", message: message },
    { sender: "Запрос", message: message },
    { sender: "Ответ", message: message },
  ]);
  useEffect(() => {
    bottomRef.current.scrollIntoView();
  }, [messages]);
  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__messages" ref={messagesContainer}>
          {messages.map((message, key) => {

            return (
              <Message
                key={key}
                sender={message.sender}
                message={message.message}
              />
            );
          })}
        </div>
        <div className="chat__text-input-wrapper">
          <div className="chat__text-input">
            <TextInput
              messagesRef={messagesContainer}
              bottomRef={bottomRef}
              addNewMessage={setMessages}
            />
          </div>
        </div>
      </div>
      <ScrollToBottom bottomRef={bottomRef} />
    </div>
  );
}

export default Chat;
