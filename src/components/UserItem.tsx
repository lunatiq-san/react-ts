import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{ padding: 10, border: "1px solid gray", cursor: "pointer" }}
    >
      {user.id}. {user.name} leave in the city {user.address.city} on street{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
