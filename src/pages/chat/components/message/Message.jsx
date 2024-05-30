import './style.scss'


function Message({ senderId, message, username }) {
  return (
    <div className="message">
      <span className="message__sender">{senderId === 0 ? 'MireaGPT' : username}</span>
      <p className="message__body">{message}</p>
    </div>
  );
}

export default Message;
