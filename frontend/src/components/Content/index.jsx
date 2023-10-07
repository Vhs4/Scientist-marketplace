import React from "react";
import CardComponent from "../otherComponents/CardComponent";

import "./styles.css";

const Content = () => {
  return (
    <div id="Container">
      <section id="LeftBar">
        <div className="CardsComponent">
          <CardComponent
            Text={"Newest and Recent"}
            Subtext={"Find the latest update"}
            icon={"assets/Group 6.svg"}
          />

          <CardComponent
            Text={"Popular of the day"}
            Subtext={"Shots featured today by curators"}
            icon={"assets/popularoftheday.svg"}
          />

          <CardComponent
            Text={"Following"}
            Subtext={"Explore from your favorite person"}
            icon={"assets/Follow.svg"}
          />
        </div>

        <div className="CardsComponent">
          <div id="friends">
            <h2>Amigos</h2>
          </div>
          <CardComponent
            Text={"#javascript"}
            Subtext={"82,645 Posted by this tag"}
            icon={"assets/code.svg"}
          />

          <CardComponent
            Text={"Popular of the day"}
            Subtext={"Shots featured today by curators"}
            icon={"assets/popularoftheday.svg"}
          />

          <CardComponent
            Text={"Following"}
            Subtext={"Explore from your favorite person"}
            icon={"assets/Follow.svg"}
          />
        </div>
      </section>

      <section id="MiddleBar">
        <div id="SearchBar">text</div>

        <div id="Content"></div>
      </section>

      <section id="RightBar">
        <div id="FriendSuggest">text</div>
      </section>
    </div>
  );
};

export default Content;
