import React from "react";
import { Card, CardBody, Media } from "reactstrap";
import { Link } from "react-router-dom";

function About(props) {
  // console.log(props)
  const partners = props.partners.map((partner) => {
    return (
      <Media tag="li" key={partner.id} className="mt-3">
        <RenderPartner partner={partner}></RenderPartner>
      </Media>
    );
  });
  return (
    <div className="container">
      <div className="row row-content">
        <Card className="bg-light mt-3">
          <CardBody>
            {/* <blockquote className="blockquote"> */}
            <h3>Psalm 46</h3>
            <p1 className="mb-0 ">
              "God is our refuge and strength, a very present help in trouble.
              The reality is that there will be difficult times, but God
              promises to be our refuge."
            </p1>
            {/* </blockquote> */}
          </CardBody>
        </Card>
      </div>

      <div className="row row-content">
        <div className="card text-center col">
          <div className="card-body">
            <h5 className="card-title">Our Story & Mission</h5>
            <p className="card-text">
              Today, it’s more important than ever to align your company values
              with your target audience. A clear, meaningful mission statement
              is one of the keys to connecting with the public. It gives the
              public a clear understanding of your company’s mission, while also
              giving prospective hires insight into your culture. If you’re not
              sure how to craft the right message, look to these company mission
              statement examples and best practices.
            </p>
          </div>
          <div className="card-body">
            <img
              src="/assets/images/family.png"
              // height="500"
              // width="400"
              alt="KaiFamily"
            />
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col">
          <div className="card-body">
            <h3 className=" text-center mt-3">Community Supporters</h3>
            <Media list>{partners}</Media>
          </div>
        </div>
      </div>
    </div>
  );
}

function RenderPartner({ partner }) {
  if (partner) {
    return (
      <React.Fragment>
        <Media object src={partner.image} alt={partner.name} width="130" />
        <Media body className="ml-5 mb-4">
          <Media heading>{partner.name}</Media>
          {partner.description}
        </Media>
      </React.Fragment>
    );
    return <div></div>;
  }
}

export default About;
