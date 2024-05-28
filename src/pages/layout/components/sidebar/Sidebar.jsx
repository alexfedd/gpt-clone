import { NavLink } from "react-router-dom";
import createBtn from "../../../../assets/svg/create_chat.svg";
import deleteBtn from "../../../../assets/svg/delete_chat.svg";
import userPfp from '../../../../assets/svg/default_pfp.svg'
import './style.scss'
import { getCookieByName } from "../../../../common/utils";
import { useGetChats } from "./hooks/useGetChats";
function Sidebar() {
  const currentUser = JSON.parse(getCookieByName('user'))
  const {data: chatsData, isPending, error} = useGetChats();
  console.log(error);
  if(!isPending) {
    console.log(chatsData);
  }
  console.log(currentUser);
  return (
    <div className="sidebar">
      <div className="sidebar__body">
        <button className="btn sidebar__btn create-btn">
          <span className="create-btn__span">Создать чат</span>
          <img src={createBtn} alt="" className="create-btn__image" />
        </button>
        <div className="sidebar__items">
          <NavLink className="sidebar__item">
            <div className="sidebar__item-title">Новый чат</div>
            <button className="sidebar__delete-btn">
              <img
                src={deleteBtn}
                alt=""
                className="sidebar__delete-btn-image"
              />
            </button>
          </NavLink>
          <NavLink className="sidebar__item sidebar__item--active">
            <div className="sidebar__item-title">Новый чат</div>
            <button className="sidebar__delete-btn">
              <img
                src={deleteBtn}
                alt=""
                className="sidebar__delete-btn-image"
              />
            </button>
          </NavLink>
          <NavLink className="sidebar__item">
            <div className="sidebar__item-title">Новый чат</div>
            <button className="sidebar__delete-btn">
              <img
                src={deleteBtn}
                alt=""
                className="sidebar__delete-btn-image"
              />
            </button>
          </NavLink>
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
