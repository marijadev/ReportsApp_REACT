import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from "../app/partials/Header";
import { Main } from "../app/components/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    )
  }
}

export {App};
