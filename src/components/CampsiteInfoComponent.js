import React from "react";
import reactRouterDom from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Col,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderCampsite({ campsite }) {
  console.log(campsite);
  return (
    <React.Fragment>
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
        </Card>
      </div>
      <div className="col-md-5 m-1">
        <Card>
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
            <CardTitle>${campsite.price}</CardTitle>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}
function RenderCampsiteDrink({ drink }) {
  return (
    <React.Fragment>
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={drink.image} alt={drink.name} />
        </Card>
      </div>
      <div className="col-md-5 m-1">
        <Card>
          <CardBody>
            <CardTitle>{drink.name}</CardTitle>
            <CardText>{drink.description}</CardText>
            <CardTitle>${drink.price}</CardTitle>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}

function CampsiteInfo(props) {
  console.log(props);
  if (props.campsite) {
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/first">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
        </div>
      </div>
    );
  }
  if (props.drink) {
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/drink">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.drink.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <RenderCampsiteDrink drink={props.drink} />
        </div>
      </div>
    );
  }
  if (props.entree) {
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/entree">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.entree.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <RenderCampsiteDrink drink={props.entree} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default CampsiteInfo;
