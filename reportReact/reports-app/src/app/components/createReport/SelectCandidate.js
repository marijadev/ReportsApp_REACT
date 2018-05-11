import React, { Component, Fragment } from 'react';
import { SingleCandidateCard } from './SingleCandidateCard';
import { candidateService } from '../../../services/candidateService';
import { Search } from '../../partials/Search';
class SelectCandidate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            candidates: [],
            selectedCandidates: []
        }
    }

    componentDidMount() {
        this.getReports();
    }

    getReports = () => {
        candidateService.fetchCandidates()
            .then(candidates => {
                this.setState({ candidates })
            })
    }

    filterCandidates = (inputField) => {
        const { candidates } = this.state;
        const selectedCandidates = candidates.filter(candidate => {
            return candidate.name.toLowerCase().includes(inputField.toLowerCase())
        })
        this.setState({ selectedCandidates });
    }

    handleSelectCandidate = (candidate) => {
        this.setState({ selectedCandidates: candidate })
    }

    render() {
        const result = this.state.selectedCandidates.length !== 0 ? this.state.selectedCandidates : this.state.candidates;
        // const { selectedCandidates: candidates } = this.state;

        if (this.state.candidates.length === 0) {
            return <h1>Loading...</h1>
        }

        return (
            <Fragment>
                <div className="search-holder">
                    <Search searchParams={this.filterCandidates} />
                </div>
                {result.map((candidate, index) => <SingleCandidateCard key={index} candidate={candidate} handleSelectReport={this.handleSelectReport}/>)}
            </Fragment>
        )
    }
}

export { SelectCandidate };