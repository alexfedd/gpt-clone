import { useEffect, useRef } from "react";
import sendBtn from "../../../../assets/svg/send_message.svg";
import "./style.scss";
import { useForm } from "react-hook-form";
import { useSendMessageMutation } from "./hooks/useSendMessageMutation";
import { useParams } from "react-router-dom";

function TextInput({ messagesRef, bottomRef, addNewMessage }) {
  const { handleSubmit, register, trigger, reset } = useForm();
  const { chatId } = useParams();
  const sendMessage = useSendMessageMutation(chatId);
  const handleChange = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    messagesRef.current.style = `margin-bottom: ${
      84 + event.target.scrollHeight
    }px`;
    bottomRef.current.scrollIntoView();
  };
  const onSubmit = async (data) => {
    addNewMessage((prev) => {
      console.log(prev);
      return [
        ...prev,
        { senderId: 1, contents: data.message },
        { senderId: 0, contents: "Печатает..." },
      ]
    });
    reset();
    const textArea = document.querySelector(".text-input__input");
    if (textArea) {
      textArea.style.height = "auto";
      messagesRef.current.style = `margin-bottom: ${84 + 56}px`;
    }
    await sendMessage.mutateAsync(data.message);
  };
  useEffect(() => {
    if (sendMessage.isError) {
      addNewMessage((prev) => {
        console.log(prev);
        return [
          ...prev.slice(0, -1),
          { senderId: 0, contents: "Произошла ошибка. Попробуйте позже." },
        ]
      });
    }
  }, [sendMessage.isError]);
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
      <button
        disabled={sendMessage.isPending}
        type="submit"
        className="text-input__button"
      >
        <img src={sendBtn} alt="" className="text-input__image" />
      </button>
    </form>
  );
}

export default TextInput;
