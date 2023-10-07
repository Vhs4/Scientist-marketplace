import React from "react";
import "../CardComponent/styles.css";

const CardComponent = ({ icon: Icon, Text, Subtext }) => {
  return (
    <div id="FirstCard">
      <div className="CardContainer">
        <div className="ImageCardContainer">
          <img src={Icon} alt="" />
        </div>

        <div className="TextContainer">
          <h3>{Text}</h3>
          <p>{Subtext}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
