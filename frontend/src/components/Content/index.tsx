"use client";
import React, { useEffect, useState } from "react";
import CardComponent from "../otherComponents/CardComponent";
import FriendCardContainer from "../otherComponents/FriendCardContainer";
import ContentCardContainer from "../otherComponents/ContentCardContainer";
import RelevantArticles from "../otherComponents/RelevantArticles";

import { api } from "../../../services/api";

import "./styles.css";

const Content = () => {
  const [data, setData] = useState([]);

  async function handlePost() {
    const { access_token } = JSON.parse(localStorage.getItem("user_token"));
    const res = await api.get(`/user/ports/get_my_posts`, {
      headers: { Authorization: "Bearer " + access_token },
    });
    setData(res.data);
  }

  useEffect(() => {
    handlePost();
  }, []);

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

        <div className="FriendCardsComponent">
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
              className="input"
            />
          </div>

          <div className="buttonClip">
            <button className="button">
              <a href="/submit" target="_blank">
                Create Post
              </a>
            </button>
          </div>
        </div>

        <div id="ContentCard">
          <div className="ContentCards">
            {data.map((card) => {
              return (
                <ContentCardContainer
                  key={card.id}
                  Img={
                    "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  }
                  Title={card.title}
                  Skills={card.skills.map((i) => i.name).join(", ")}
                  Username={card.username}
                  Created_at={card.created_at}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section id="RightBar">
        <div id="RelevantArticles">Relevant articles</div>
        <RelevantArticles
          Subtitle={"Nasa"}
          Title={"NASA Gov"}
          Path={"https://www.nasa.gov/"}
        />
        <RelevantArticles
          Subtitle={"Go to Mars"}
          Title={"Data nasa"}
          Path={"https://data.nasa.gov/"}
        />
        <RelevantArticles
          Subtitle={"Asteroids"}
          Title={"NASA Asteroids"}
          Path={"https://www.jpl.nasa.gov/asteroid-watch/next-five-approaches"}
        />
        <RelevantArticles
          Subtitle={"Nasa DATA STRATEGY"}
          Title={"Nasa Book"}
          Path={
            "https://www.nasa.gov/wp-content/uploads/2023/02/nasa_data_strategy.pdf"
          }
        />
      </section>
    </div>
  );
};

export default Content;
