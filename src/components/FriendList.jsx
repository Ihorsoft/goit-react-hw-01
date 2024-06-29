import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friends, index) => {
        // console.log("Item FriendLIst :", friends);
        // const itemf = { friends };
        // console.log("ItemF FriendList  :", itemf);

        return (
          <div key={friends.id}>
            {/*  <p>
              Message {index + 1} {item}
            </p> */}

            <li>
              <FriendListItem item={friends} />
            </li>
          </div>
        );
      })}
    </ul>
  );
};
