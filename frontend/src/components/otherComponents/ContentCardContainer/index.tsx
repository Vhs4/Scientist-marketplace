import React from "react";
import "./styles.css";

const ContentCardContainer = ({
  Img,
  Title,
  Skills,
  Username,
  Created_at,
}: any) => {
  return (
    <div className="ContentCardContainer">
      <div className="ContainerImg">
        <img src={Img} alt="" />
      </div>
      <div className="InfoCardContainer">
        <div className="TitleAndLike">
          <h1>{Title}</h1>
          <img src="assets/Like.svg" alt="" />
        </div>
        <div className="TagsContainer">
          <div className="Tags">
            <div className="btn-xs">{Skills}</div>
          </div>
        </div>
        <div className="UserContainer">
          <div className="ImgContainer">
            <div>
              <img src="assets/Memoji Boys 2-1.svg" alt="" />
            </div>
          </div>
          <div className="UserContent">
            <div className="UserName">{Username}</div>
            <div>{Created_at}</div>
          </div>
          <div className="Statistics">
            <div>36,654 Likes</div>
            <div>56 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCardContainer;
