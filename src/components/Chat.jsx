import React from 'react';

const Chat = ({ desendingOrderMessages }) => {
  console.log(desendingOrderMessages,'message');
  return (
    <div className="chat-display">
      {desendingOrderMessages.map((message, _index) => (
        <div key={_index}>
          <div className="chat-message-header">
            <div className="chat-image-container">
              <img src={message.img} alt={message.first_name} />
            </div>
            <p>{message?.name}</p>
          </div>
          <p>{message?.massage}</p>
        </div>
      ))}
    </div>
  );
};

export default Chat;
