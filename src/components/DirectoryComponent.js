import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { Stagger } from "react-animation-components";

function RenderDirectoryItem({ campsite }) {
  return (
    //what if I want to display three imagies in one row instead of tow.
    <Card>
      <Link to={`/food/${campsite.id}`}>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
          <CardTitle className="btn btn-secondary fa fa-heart">
            {campsite.name}
          </CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function RenderDrink({ drink }) {
  console.log(drink);
  return (
    <Card>
      <Link to={`/drink/${drink.id}`}>
        <CardImg width="100%" src={drink.image} alt={drink.name} />
        <CardImgOverlay>
          <CardTitle className="btn btn-secondary fa fa-heart">
            {drink.name}
          </CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
function RenderEntree({ entree }) {
  console.log(entree);
  return (
    <Stagger in>
      <Card>
        <Link to={`/entree/${entree.id}`}>
          <CardImg width="100%" src={entree.image} alt={entree.name} />
          <CardImgOverlay>
            <CardTitle className="btn btn-secondary fa fa-heart">
              {entree.name}
            </CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </Stagger>
  );
}

function Directory(props) {
  console.log(props);
  const first = props.campsites.campsites.map((campsite) => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <RenderDirectoryItem campsite={campsite} />
      </div>
    );
  });
  const second = props.drinks.drinks.map((drink) => {
    return (
      <div key={drink.id} className="col-md-5 m-1">
        <RenderDrink drink={drink} />
      </div>
    );
  });
  const third = props.entrees.entrees.map((entree) => {
    return (
      <div key={entree.id} className="col-md-5 m-1">
        <RenderEntree entree={entree} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <hr />
          <h2>Apitizer</h2>
        </div>
      </div>
      <div className="row">{first}</div>
      <div className="row">
        <div className="col">
          <hr />
          <h2>Drinks</h2>
        </div>
      </div>
      <div className="row">{second}</div>
      <div className="row">
        <div className="col">
          <hr />
          <h2>Entrees</h2>
        </div>
      </div>
      <div className="row">{third}</div>
    </div>
  );
}

export default Directory;
