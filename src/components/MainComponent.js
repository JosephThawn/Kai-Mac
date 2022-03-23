import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
// import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./AboutComponent";
import { connect } from "react-redux";
import { fetchCampsites } from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
    drinks: state.drinks,
    entrees: state.entrees,
  };
};

const mapDispatchToProps = {
  // addComment: (campsiteId, rating, author, text) =>
  //   addComment(campsiteId, rating, author, text),
  fetchCampsites: () => fetchCampsites(),
  resetFeedbackForm: () => actions.reset("feedbackForm"),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchCampsites();
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log("render");

    const FoodWithId = ({ match }) => {
      return (
        <CampsiteInfo
          campsite={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.id === +match.params.campsiteId
            )[0]
          }
        />
      );
    };
    const DrinkWithId = ({ match }) => {
      return (
        <CampsiteInfo
          drink={
            this.props.drinks.drinks.filter(
              (drink) => drink.id === +match.params.campsiteId
            )[0]
          }
        />
      );
    };
    const EntreeWithId = ({ match }) => {
      return (
        <CampsiteInfo
          entree={
            this.props.entrees.entrees.filter(
              (entree) => entree.id === +match.params.campsiteId
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          {/* <Route path="/home" component={HomePage} /> */}
          <Route
            exact
            path="/directory"
            render={() => (
              <Directory
                campsites={this.props.campsites}
                drinks={this.props.drinks}
                entrees={this.props.entrees}
              />
            )}
          />
          <Route path="/food/:campsiteId" component={FoodWithId} />
          <Route path="/drink/:campsiteId" component={DrinkWithId} />
          <Route path="/entree/:campsiteId" component={EntreeWithId} />

          <Route
            exact
            path="/contactus"
            render={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />

          <Route
            exact
            path="/aboutus"
            render={() => <About partners={this.props.partners} />}
          />
          <Redirect to="/directory" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
