import React from "react";
import "./styles.css";

const RelevantArticle = ({ Subtitle, Title, Post, Path }: any) => {
  return (
    <div className="Content">
      <div className="Container">
        <div className="subtitle">
          <div>{Subtitle}</div>
        </div>
        <div className="title">
          <a href={Path} target="_blank">
            {Title}
          </a>
        </div>
        <div className="posts">
          <div>{Post}</div>
        </div>
      </div>
    </div>
  );
};

export default RelevantArticle;
