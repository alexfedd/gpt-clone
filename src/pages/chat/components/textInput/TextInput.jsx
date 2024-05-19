import sendBtn from "../../../../assets/svg/send_message.svg";
import "./style.scss";
function TextInput() {
  const handleChange = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  };
  return (
    <form
      action=""
      className="text-input"
      onChange={(e) => {
        handleChange(e);
      }}
    >
      <textarea
        rows={1}
        type="text"
        className="text-input__input"
        placeholder="Ваше сообщение здесь"
      ></textarea>

      <button type="submit" className="text-input__button">
        <img src={sendBtn} alt="" className="text-input__image" />
      </button>
    </form>
  );
}

export default TextInput;
