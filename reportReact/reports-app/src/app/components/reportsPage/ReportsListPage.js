import React, { Component, Fragment } from 'react';
import { Search } from '../../partials/Search';
import { SingleReport } from './SingleReport';
import { reportService } from "../../../services/reportService";
import { Modal } from '../../partials/Modal';

class ReportsListPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reports: null,
			filteredReports: null,
			selectedReport: {}
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
		this.setState({ filteredReports });
	}

	handleSelectReport = (report) => {
		this.setState({ selectedReport: report })
	}

	render() {

		const result = this.state.filteredReports ? this.state.filteredReports : this.state.reports;
		const { selectedReport: report } = this.state;

		if (this.state.reports == null) {
			return <h1>Loading</h1>
		}

		return (
			<Fragment>
				<Search searchParams={this.filterReports} />
				{result.map((report, index) => { return <SingleReport key={index} report={report} handleSelectReport={this.handleSelectReport} /> })}
				<Modal report={report} />
			</Fragment>
		)
	}
}

export { ReportsListPage }
