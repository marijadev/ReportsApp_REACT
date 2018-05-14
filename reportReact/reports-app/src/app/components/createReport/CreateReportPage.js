import React, { Component, Fragment } from 'react';
import { Menu } from './Menu';
import { SelectCandidate } from './SelectCandidate';
import { SelectCompany } from './SelectCompany';
import { SelectDetails } from './SelectDetails';
import { isObjectEmpty } from '../../../shared/utils';
import { SelectedInfo } from './SelectedInfo';
import { Route, Switch, Link } from 'react-router-dom';

class CreateReportPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCandidate: {},
			selectedCompany: {},
			selectedDetails: {}
		}
	}

	setSelectedCandidate = (candidateObj) => {
		this.setState({ selectedCandidate: candidateObj });
	}

	setSelectedCompany = (companyObj) => {
		this.setState({ selectedCompany: companyObj });
	}

	setActiveItem = () => {
		// let classes = '';

		// if (isObjectEmpty(this.state.selectedCandidate)) {
		// 	menuWrapper.classList.add('candidate-set');
		// }
	}

	renderPreviousComponent = () => {
		const currentUrl = this.props.match.url.replace(/\/$/, "");
		const currentPath = this.props.location.pathname.replace(/\/$/, "");

		if (currentPath === '/newReport/details') {
			return `${currentUrl}/company`;
		} else {
			return `${currentUrl}`;
		}
	}

	renderNextComponent = () => {
		const currentUrl = this.props.match.url.replace(/\/$/, "");
		const currentPath = this.props.location.pathname.replace(/\/$/, "");

		if (currentPath === '/newReport') {
			return `${currentUrl}/company`;
		} else {
			return `${currentUrl}/details`;
		}
	}

	componentDidMount() {
		this.setActiveItem();
	}

	componentDidUpdate() {
		this.setActiveItem();
	}

	render() {
		// console.log(this.props.match.url);
		return (
			<Fragment>
				<div className="create-report-wrapper">
					<div className="menu-wrapper">
						<Menu setActiveItem={this.setActiveItem} />
						<SelectedInfo info={this.state} />
					</div>
					<div className="create-report-separator"></div>
					<div className="switch-reports-wrapper">
						<div className="switch-reports-holder">
							<Switch>
								<Route path={this.props.match.url} exact render={() => <SelectCandidate setSelectedCandidate={this.setSelectedCandidate} />} />
								<Route path={this.props.match.url + '/company'} render={() => <SelectCompany setSelectedCompany={this.setSelectedCompany} />} />
								<Route path={this.props.match.url + '/details'} component={SelectDetails} />
							</Switch>
						</div>
						<div className="create-report-navigation">
							<div className="previous-btn create-report-btns">
								<Link to={this.renderPreviousComponent()}>
									<button className="create-report-btn" >Previous</button>
								</Link>
							</div>
							<div className="next-btn create-report-btns">
								<Link to={this.renderNextComponent()}>
									<button className="create-report-btn">Next</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export { CreateReportPage }
