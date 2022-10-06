import React from "react";

const Text = () => {
  const [message, Setmessage] = React.useState([1, 2, 3]);
  return (
    <div>
      <h1>
        {message.length === 0
          ? `You're all caught up!`
          : `You have ${message.length}
        unread ${message.length > 1 ? "messages" : "message"}`}
      </h1>
    </div>
  );
};
export default Text;
