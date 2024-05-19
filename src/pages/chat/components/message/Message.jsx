import './style.scss'


function Message({ sender, message }) {
  return (
    <div className="message">
      <span className="message__sender">{sender}</span>
      <p className="message__body">{message}</p>
    </div>
  );
}

export default Message;
