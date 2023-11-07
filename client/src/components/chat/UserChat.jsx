import React from "react";
import { useFetchRecipient } from "../../hooks/useFetchReciept";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipient(chat, user);
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="user-card align-items-center p-2 justify-content-between"
      role="button"
    >
      <div className="d-flex">
        <div className="me-2" height="35px">
          avatar
        </div>
        <div className="text-content">
          <div className="name">{recipientUser?.name}</div>
          <div className="text">Text Msg</div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-end">
        <div className="date">12/12/2002</div>
        <div className="this-user-notifications">2002</div>
        <span className="user-online"></span>
      </div>
    </Stack>
  );
};

export default UserChat;
