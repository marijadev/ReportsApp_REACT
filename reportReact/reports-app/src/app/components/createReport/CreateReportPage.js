import React, { Component, Fragment } from 'react';
import { Menu } from './Menu';
import { SelectCandidate } from './SelectCandidate';

class CreateReportPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {

		return (
			<Fragment>
				<div className="create-report-wrapper">
					<div className="menu-wrapper">
						<Menu />
					</div>
					<div className="create-report-separator"></div>
					<div className="switch-reports-wrapper">
						<div className="switch-reports-holder">
							<SelectCandidate />
						</div>
						<div className="create-report-navigation">
							<div className="previous-btn create-report-btns">
								<button className="create-report-btn">Previous</button>
							</div>
							<div className="next-btn create-report-btns">
								<button className="create-report-btn">Next</button>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export { CreateReportPage }
