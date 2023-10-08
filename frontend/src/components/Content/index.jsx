import React from "react";
import CardComponent from "../otherComponents/CardComponent";
import FriendCardContainer from "../otherComponents/FriendCardContainer";
import ContentCardContainer from "../otherComponents/ContentCardContainer";

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
            <h2>Friends</h2>
          </div>
          <FriendCardContainer
            Tag={"#javascript"}
            Value={"82,645"}
            Trending={"Posted by this tag"}
            icon={"assets/Dev.svg"}
          />

          <FriendCardContainer
            Tag={"#bitcoin"}
            Value={"#65,523"}
            Trending={"Trending in Bangladesh"}
            icon={"assets/bitcoin.svg"}
          />

          <FriendCardContainer
            Tag={"#innovation"}
            Value={"51,354"}
            Trending={"Trending in Brazil"}
            icon={"assets/blogging.svg"}
          />
        </div>
      </section>

      <section id="MiddleBar">
        <div id="SearchBar">
          <div className="imgContainer">
            <img src="assets/Memoji Boys 2-1.svg" alt="" />
          </div>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Let’s share what going on your mind..."
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn">Create Post</button>
        </div>

        <div id="ContentCard">
          <div className="ContentCards">
            <ContentCardContainer />
            <ContentCardContainer />
            <ContentCardContainer />
            <ContentCardContainer />
          </div>
        </div>
      </section>

      <section id="RightBar">
        <div id="FriendSuggest">text</div>
      </section>
    </div>
  );
};

export default Content;
