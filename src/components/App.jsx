import React from "react";
// import ReactDOM from "react-dom/client";

//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product";
import Mailbox from "./Mailbox";
import MessageList from "./MessageList";
import { Alert } from "./Alert";
import { Profile } from "./Profile";
import userData from "../userData1.json";

// const userData = JSON.parse(userData1);

//const message = ["goodbay", "thefinish"];

const App = () => {
  return (
    <div>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Alert variant="info">
        <Mailbox username="Ivan" messages={["goodbay", "thefinish"]} />
      </Alert>
      {/* <Mailbox username="Ivan" messages={["goodbay", "thefinish"]} /> */}

      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};
export default App;
