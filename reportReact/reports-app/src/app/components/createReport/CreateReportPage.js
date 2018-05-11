import React, { Component, Fragment } from 'react';
import { Search } from '../../partials/Search';
import { SingleCandidateCard } from './SingleCandidateCard';
import { candidateService } from '../../../services/candidateService';
import { Menu } from './Menu';
class CreateReportPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			candidates: null,
			selectedCandidates: {}
		}
	}

	componentDidMount() { 
		this.getReports();
	 }

	getReports = () => {
		candidateService.fetchCandidates()
			.then(candidates => {
				this.setState({ candidates: candidates })
			})
		}
		
	filterCandidates = (inputField) => {
		const { candidates } = this.state;
		const filteredCandidates = candidates.filter(candidate => {
			return candidate.name.toLowerCase().includes(inputField.toLowerCase())
		})
		this.setState({ filteredCandidates });
	}

	handleSelectCandidate = (candidate) => {
		this.setState({ selectedCandidates: candidate })
	}

	render() {

		const result = this.state.filteredCandidates ? this.state.filteredCandidates : this.state.candidates;
		const { selectedCandidates: candidates } = this.state;
			
		if(this.state.candidates === null) {
			return <h1>Loading...</h1>
		}
		
		return (
			<Fragment>
				<div className="create-report-wrapper">
					<div className="menu-wrapper">
						<Menu />
					</div>
					<div className="create-report-separator"></div>
					<div className="switch-reports-wrapper">
						<div className="search-holder">
							<Search searchParams={this.filterCandidates} />
						</div>
						<div className="switch-reports-holder">
							{result.map((candidate, index) => {return <SingleCandidateCard key={index} candidate={candidate}/>})}
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
