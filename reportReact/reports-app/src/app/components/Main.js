
import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { ReportsListPage } from "../components/reportsPage/ReportsListPage";
import { CreateReportPage } from "../components/createReport/CreateReportPage";

class Main extends Component {
    render() {
      return (
        <Fragment>
          <div className="container">
            <Switch>
                <Route exact path="/" component={ReportsListPage} />
                <Route path="/newReport" component={CreateReportPage} />
            </Switch>
          </div>
        </Fragment>
      )
    }
  }
  
  export { Main };