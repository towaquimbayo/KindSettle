import React from "react";
import "./FeaturedPosts.css";
import featurePostsOne from "../../img/featurePostsOne.png";
import featurePostsTwo from "../../img/featurePostTwo.png";

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
            <button className="button-post">Co-Parenting</button>
            <h3 className="title-post">
              How Does Understanding Child <br /> Support Benefit Custodial
              Parents?
            </h3>

            <p className="description-post ">
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
            <button className="button-post">Mediation</button>
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
      <button className="button-section">View more resources</button>
    </>
  );
};

export default FeaturedPosts;
