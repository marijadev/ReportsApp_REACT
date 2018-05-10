import React, { Component, Fragment } from 'react';
import { Search } from '../../partials/Search';
import { SingleReport } from './SingleReport';
import { reportService } from "../../../services/reportService"

class ReportsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: null,
      filteredReports: null
    }
  }

  componentDidMount() {
    this.getReports()
  }

  getReports = () => {
    reportService.fetchReports()
      .then(reports => {
        this.setState({ reports })
      })
  }

  filterReports = (inputField) => {
    const { reports } = this.state;
    const filteredReports = reports.filter(report => { 
      return report.candidateName.toLowerCase().includes(inputField.toLowerCase())
    })
    this.setState({filteredReports});
  }

  render() {
    
    const result = this.state.filteredReports ? this.state.filteredReports : this.state.reports;
    
    if (this.state.reports == null) {
      return <h1>Loading</h1>
    }

    return (
      <Fragment>
        <Search searchParams={this.filterReports} />
        {result.map((report, index) => {return <SingleReport key={index} report={report} />})}
      </Fragment>
    )
  }
}

export { ReportsListPage }
