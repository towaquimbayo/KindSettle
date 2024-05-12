import React from "react";
import "./FeaturedPosts.css";
import featurePostsOne from "../../img/featurePostsOne.png";
import featurePostsTwo from "../../img/featurePostTwo.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const FeaturedPosts = () => {
  const navigate = useNavigate();

  return (
    <div className="featuredPostsContainer">
      <h1>Featured Posts</h1>
      <div className="container-post">
        <div className="column-post">
          <img
            src={featurePostsOne}
            alt="featurePostsOne"
            className="img-post"
          />

          <div>
            <Button
              text="Co-Parenting"
              title="Co-Parenting"
              customStyle={{
                backgroundColor: "#dbdbdb",
                border: "solid 1px #dbdbdb",
                color: "black",
                borderRadius: "5rem",
                margin: "0.5rem 0",
                fontSize: "0.9rem",
              }}
            />

            <h3 className="title-post">
              How Does Understanding Child Support Benefit Custodial Parents?
            </h3>

            <p className="description-post">
              Navigating the complexities of child support can be daunting for
              many co-parents. But why is it crucial to have a solid
              understanding of this process? In this guide,...
            </p>
          </div>
        </div>
        <div className="column-post">
          <img
            src={featurePostsTwo}
            alt="featurePostsTwo"
            className="img-post"
          />

          <div>
            <Button
              text="Mediation"
              title="Mediation"
              customStyle={{
                backgroundColor: "#dbdbdb",
                border: "solid 1px #dbdbdb",
                color: "black",
                borderRadius: "5rem",
                margin: "0.5rem 0",
                fontSize: "0.9rem",
              }}
            />

            <h3 className="title-post">
              Why is Mediation Essential for Resolving Child Support Disputes?
            </h3>

            <p className="description-post">
              Mediation offers a pathway to resolving child support disputes
              without the emotional and financial toll of traditional court
              battles. But what makes mediation s..
            </p>
          </div>
        </div>
      </div>
      <Button
        text="View more resources"
        title="View more resources"
        customStyle={{ margin: "0 auto" }}
        onClick={() => navigate("/resources")}
      />
    </div>
  );
};

export default FeaturedPosts;
