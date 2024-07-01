import { FriendListItem } from "./FriendListItem";
import s2 from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <div className={s2.wripper}>
      <ul className={s2.friendlist}>
        {friends.map((friends, index) => {
          return (
            <div key={friends.id}>
              <li className={s2.frienditem}>
                <FriendListItem item={friends} />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
