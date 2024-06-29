import { Alertcolor } from "./Alertcolor";

export const FriendListItem = ({ item }) => {
  // export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  // console.log("avatar is :", item.avatar);
  return (
    <div>
      <img src={item.avatar} alt={item.avatar} width="48" />
      <p>{item.name}</p>

      {item.isOnline ? (
        <Alertcolor variant="success">
          <p>Online</p>
        </Alertcolor>
      ) : (
        <Alertcolor variant="error">
          <p>Offline</p>
        </Alertcolor>
      )}

      {/* <img src={avatar} alt={avatar} width="48" />
      <p>{name}</p>
      <p>{isOnline}</p> */}
    </div>
  );
};
