import React from "react";
import "./styles.css";

const ContentCardContainer = ({Img, Title, Tag}: any) => {
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
            <div className="btn-xs">{Tag}</div>
          </div>
        </div>
        <div className="UserContainer">
          <div className="ImgContainer">
            <div>
              <img src="assets/Memoji Boys 2-1.svg" alt="" />
            </div>
          </div>
          <div className="UserContent">
            <div className="UserName">Paulo Filho</div>
            <div>3 weeks ago</div>
          </div>
          <div className="Statistics">
            <div>651,324 Views</div>
            <div>36,6545 Likes</div>
            <div>56 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCardContainer;
