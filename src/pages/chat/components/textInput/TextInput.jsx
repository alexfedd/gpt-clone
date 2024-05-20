import { useEffect, useRef } from "react";
import sendBtn from "../../../../assets/svg/send_message.svg";
import "./style.scss";
import { useForm } from "react-hook-form";

function TextInput({ messagesRef, bottomRef, addNewMessage }) {
  const { handleSubmit, register, trigger, reset, watch } = useForm();
  const handleChange = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    messagesRef.current.style = `margin-bottom: ${
      84 + event.target.scrollHeight
    }px`;
    bottomRef.current.scrollIntoView();
  };
  const onSubmit = (data) => {
    addNewMessage((prev) => [
      ...prev,
      { sender: "Запрос", message: data.message },
    ]);
    reset();
    const textArea = document.querySelector(".text-input__input");
    if (textArea) {
      textArea.style.height = "auto";
      messagesRef.current.style = `margin-bottom: ${84 + 56}px`;
    }
  };
  return (
    <form className="text-input" onSubmit={handleSubmit(onSubmit)}>
      <textarea
        rows={1}
        type="text"
        className="text-input__input"
        placeholder="Ваше сообщение здесь"
        {...register("message")}
        onChange={(e) => {
          trigger("content"); // Для повторной валидации при изменении содержимого
          handleChange(e);
        }}
      ></textarea>
      <button type="submit" className="text-input__button">
        <img src={sendBtn} alt="" className="text-input__image" />
      </button>
    </form>
  );
}

export default TextInput;
