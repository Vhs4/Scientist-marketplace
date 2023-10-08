import React from "react";
import "./styles.css";

const FriendCardContainer = ({ icon: Icon, Tag, Value, Trending }: any) => {
  return (
    <div id="FriendCard">
      <div className="FriendCardContainer">
        <div className="FriendTagCardContainer">
          <img src={Icon} alt="" />
        </div>

        <div className="TextContainer">
          <h3>{Tag}</h3>
          <span>{Value}</span> º <span>{Trending}</span>
        </div>
      </div>
    </div>
  );
};

export default FriendCardContainer;
