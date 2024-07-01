import React from "react";

import "./App.css";
import "./TransactionHistory.css";
import Product from "./Product";
import Mailbox from "./Mailbox";
import MessageList from "./MessageList";
import { Alert } from "./Alert";
import { Profile } from "./Profile";
import userData from "../userData1.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";
import clsx from "clsx";
import s from "./Profile.module.css";

const variant1 = "Houme";
const outlined1 = false;
const elevanted1 = "2";
console.log(
  clsx(variant1, { "is-outlined": outlined1, "is-elevanted": elevanted1 })
);

const App = () => {
  return (
    <div>
      {/*  <h1>Best selling</h1>
      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Alert variant="info">
        <Mailbox username="Ivan" messages={["goodbay", "thefinish"]} />
      </Alert> */}

      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
