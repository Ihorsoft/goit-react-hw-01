/* const Mailbox = ({ username, messages }) => {
  return (
    <div>
      <p>Hello {username}</p>
      {messages.length > 0 && <p>You have {messages.length} unread messages</p>}
    </div>
  );
}; */

import MessageList from "./MessageList";

const Mailbox = ({ username, messages }) => {
  return (
    <div>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages</p>
          <MessageList messages={messages} />
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
};

export default Mailbox;
