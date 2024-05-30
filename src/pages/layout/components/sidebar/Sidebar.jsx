import createBtn from "../../../../assets/svg/create_chat.svg";
import userPfp from "../../../../assets/svg/default_pfp.svg";
import "./style.scss";
import { getCookieByName } from "../../../../common/utils";
import { useGetChats } from "./hooks/useGetChats";
import { useCreateChatMutation } from "./hooks/useCreateChatMutation";
import ChatLink from "./chatLink/ChatLink";
import { useEffect, useState } from "react";
function Sidebar() {
  const currentUser = JSON.parse(getCookieByName("user"));
  const { data: chatsData, isPending, error } = useGetChats();
  const [chatList, setChatList] = useState()
  useEffect(() => {
    setChatList(chatsData?.data)
  }, [chatsData])
  const onCreateChat = () => {
    setChatList((prev) => [...prev, {topicName: 'Новый чат', isNewChat: true}])
    console.log(chatList);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__body">
        <button className="btn sidebar__btn create-btn" onClick={onCreateChat}>
          <span className="create-btn__span">Создать чат</span>
          <img src={createBtn} alt="" className="create-btn__image" />
        </button>
        <div className="sidebar__items">
          {chatList?.length === 0 ? (
            <span>Нет чатов</span>
          ) : (
            chatList?.map((chat, id) => {
              return (
                <ChatLink key={id} chat={chat} isNewChat={chat?.isNewChat}/>
              );
            })
          )}
        </div>
      </div>
      <div className="sidebar__user-info">
        <img src={userPfp} alt="" className="sidebar__user-pfp" />
        <span className="sidebar__user-name">{currentUser.username}</span>
      </div>
    </div>
  );
}

export default Sidebar;
