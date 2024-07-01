import { Alertcolor } from "./Alertcolor";
import s1 from "./FriendList.module.css";

export const FriendListItem = ({ item }) => {
  return (
    <div>
      <img src={item.avatar} alt={item.avatar} width="48" />

      <h2 className={s1.nameitem}>{item.name}</h2>

      {item.isOnline ? (
        <Alertcolor variant="success">
          <p className={s1.statusitem}>Online</p>
        </Alertcolor>
      ) : (
        <Alertcolor variant="error">
          <p className={s1.statusitem}>Offline</p>
        </Alertcolor>
      )}
    </div>
  );
};
