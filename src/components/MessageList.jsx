const MessageList = ({ messages }) => {
  // console.log(message.join());
  return (
    <div>
      {messages.map((item, index) => {
        return (
          <p key={item}>
            Message {index + 1} {item}
          </p>
        );
      })}
    </div>
  );
};

export default MessageList;
