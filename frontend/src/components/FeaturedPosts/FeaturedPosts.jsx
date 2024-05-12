import React from "react";
import "./FeaturedPosts.css";
import featurePostsOne from "../../img/featurePostsOne.png";
import featurePostsTwo from "../../img/featurePostTwo.png";
import Button from "../Button";

const FeaturedPosts = () => {
  return (
    <>
      <h1 className="header-post">Featured Posts</h1>
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
                backgroundColor: "#444",
                border: "solid 1px #444",
              }}
              type="submit"
            />

            <h3 className="title-post">
              How Does Understanding Child <br /> Support Benefit Custodial
              Parents?
            </h3>

            <p className="description-post">
              Navigating the complexities of child support can be <br />
              daunting for many co-parents. But why is it crucial <br /> to have
              a solid understanding of this process? In this guide,...
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
                backgroundColor: "#333",
                border: "solid 1px #333",
              }}
              type="submit"
            />

            <h3 className="title-post">
              Why is Mediation Essential for <br /> Resolving Child Support
              Disputes?
            </h3>

            <p className="description-post">
              Mediation offers a pathway to resolving child support <br />
              disputes without the emotional and financial toll of <br />
              traditional court battles. But what makes mediation s..
            </p>
          </div>
        </div>
      </div>
      <Button
        text="View more resources"
        title="View more resources"
        customStyle={{ display: "block", margin: "0 auto" }}
        type="submit"
      />
    </>
  );
};

export default FeaturedPosts;
