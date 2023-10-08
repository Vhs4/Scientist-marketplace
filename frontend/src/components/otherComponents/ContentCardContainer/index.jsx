import React from "react";
import "./styles.css";

const ContentCardContainer = () => {
  return (
    <div className="ContentCardContainer">
      <div>
        <img src="assets/Rectangle 24.svg" alt="" />
      </div>
      <div className="InfoCardContainer">
        <div className="TitleAndLike">
          <h1>Blockchain developer best practices on innovationchain</h1>
          <div className="LikeContainer">
            <img src="assets/Like.svg" alt="" />
          </div>
        </div>
        <div className="TagsContainer">
          <div className="Tags">
            <div className="btn-xs">finance</div>
            <div className="btn-xs">bitcoin</div>
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
