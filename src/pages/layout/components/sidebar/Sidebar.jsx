import { NavLink } from "react-router-dom";
import createBtn from "../../../../assets/svg/create_chat.svg";
import deleteBtn from "../../../../assets/svg/delete_chat.svg";
import userPfp from "../../../../assets/svg/default_pfp.svg";
import "./style.scss";
import { getCookieByName } from "../../../../common/utils";
import { useGetChats } from "./hooks/useGetChats";
import { useCreateChatMutation } from "./hooks/useCreateChatMutation";
function Sidebar() {
  const currentUser = JSON.parse(getCookieByName("user"));
  const { data: chatsData, isPending, error } = useGetChats();
  const useCreateChat = useCreateChatMutation();
  const onCreateChat = () => {
    useCreateChat.mutate();
  };
  return (
    <div className="sidebar">
      <div className="sidebar__body">
        <button className="btn sidebar__btn create-btn" onClick={onCreateChat}>
          <span className="create-btn__span">Создать чат</span>
          <img src={createBtn} alt="" className="create-btn__image" />
        </button>
        <div className="sidebar__items">
          {chatsData?.data.length === 0 ? (
            <span>Нет чатов</span>
          ) : (
            chatsData?.data.map((chat) => {
              return (
                <NavLink key={chat.id} to={`/c/${chat.id}`} className="sidebar__item">
                  <div className="sidebar__item-title">{chat.topicName}</div>
                  <button className="sidebar__delete-btn">
                    <img
                      src={deleteBtn}
                      alt=""
                      className="sidebar__delete-btn-image"
                    />
                  </button>
                </NavLink>
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
