import React from "react";
import "./App.css";
import { connect } from "net";

const App = props => {
  return <ToDo {...props} />;
};

const mapStateToProps = state => {
  return {
    list: state.appReducer.list,
  };
};

const mapDispatchToProps = {
  ...appActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
