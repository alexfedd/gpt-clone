import { NavLink } from "react-router-dom";
import checkBtn from "../../../../../assets/svg/check_btn.svg";
import { useState } from "react";
import { useCreateChatMutation } from "../hooks/useCreateChatMutation";

function ChatLink({ chat, isNewChat }) {
  const [isCreating, setIsCreating] = useState(isNewChat);
  const [chatName, setChatName] = useState("Новый чат");
  const useCreateChat = useCreateChatMutation();
  const createChat = () => {
    if (chatName === "") {
      useCreateChat.mutate("Новый чат");
    } else {
      useCreateChat.mutate(chatName);
    }
    setIsCreating(false);
  };
  if (isCreating) {
    return (
      <div className={"sidebar__item"}>
        <input
          type="text"
          autoFocus={true}
          onChange={(e) => {
            setChatName(e.target.value);
          }}
          onBlur={createChat}
          defaultValue={"Новый чат"}
          className="sidebar__item-title"
        />
        <button className="sidebar__chat-btn" onClick={createChat}>
          <img src={checkBtn} alt="" className="sidebar__chat-btn-image" />
        </button>
      </div>
    );
  }
  return (
    <NavLink
      to={`/c/${chat.id}`}
      className={({ isActive }) =>
        isActive ? "sidebar__item sidebar__item--active" : "sidebar__item"
      }
    >
      <p className="sidebar__item-title">{chat.topicName}</p>
    </NavLink>
  );
}

export default ChatLink;
