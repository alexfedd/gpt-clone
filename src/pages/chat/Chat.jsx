import Message from "./components/message/Message";
import TextInput from "./components/textInput/TextInput";
import "./style.scss";
function Chat() {
  const message =
    "Lorem ipsum dolor sit amet consectetur. Montes et tortor consequat iaculis porttitor magna vitae arcu. Amet faucibus vitae massa ullamcorper. Cursus adipiscing cursus semper maecenas lectus. Urna quis tincidunt massa etiam ac vitae mi nisi. Massa ac non varius amet turpis feugiat volutpat eu. Odio morbi bibendum faucibus posuere ut dapibus at dictum. Cursus nunc ut felis non eu cursus iaculis molestie sed. Sed ut bibendum dui pharetra. Elit ullamcorper consectetur et faucibus urna. Amet ipsum placerat senectus amet. Tincidunt porta rutrum eros duis vel. Scelerisque et ac dictum id fusce eget consectetur sed. Consectetur adipiscing enim facilisis vivamus sed cursus tempus. Sit ac id consectetur amet tempor. In aliquet urna eget diam tortor suscipit dapibus. Egestas fermentum in sem elementum suspendisse malesuada pharetra pulvinar. Arcu at eget habitant ullamcorper ullamcorper sit fusce. Eget neque amet nunc felis eget. Venenatis ultrices sodales posuere ornare ut quam lacus quis. Odio id pellentesque purus libero placerat tincidunt. Blandit ornare vehicula sit non. Hac aliquet quam quis ipsum risus ipsum ornare vulputate. Tempor feugiat quam egestas cras pharetra vestibulum arcu integer sit. Dictum aliquam vitae tincidunt sed arcu felis quam netus.";
  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__messages">
          <Message sender={"Запрос"} message={message} />
          <Message sender={"Ответ"} message={message} />
          <Message sender={"Запрос"} message={message} />
          <Message sender={"Ответ"} message={message} />
        </div>
        <div className="chat__text-input-wrapper">
          <div className="chat__text-input">
            <TextInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
