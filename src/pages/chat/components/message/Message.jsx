import "./style.scss";

function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, " ").replace(/=\s*$/, ""));
}

function Message({ senderId, message, username }) {
  return (
    <div className="message">
      <span className="message__sender">
        {senderId === 0 ? "MireaGPT" : username}
      </span>
      <p className="message__body">{decodeQueryParam(message)}</p>
    </div>
  );
}

export default Message;
