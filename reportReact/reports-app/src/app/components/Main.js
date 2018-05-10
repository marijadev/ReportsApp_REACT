
import React, {Component, Fragment} from "react";
import {Switch} from "react-router-dom";
import {ReportsListPage} from "../components/reportsPage/ReportsListPage";
class Main extends Component {
    render() {
      return (
        <Fragment>
          <div className="container">
            <Switch>
                <ReportsListPage />
            </Switch>
          </div>
        </Fragment>
      )
    }
  }
  
  export { Main };