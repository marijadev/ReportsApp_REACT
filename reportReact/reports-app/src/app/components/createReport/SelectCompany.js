import React, { Component, Fragment } from 'react';
import { companyService } from '../../../services/companyService';
import { Search } from '../../partials/Search';

class SelectCompany extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companies: [],
            selectedCompanies: []
        }
    }

    getCompany() {
        companyService.fetchCompanies()
        .then(companies => {
            this.setState({ companies })
        })
    }

    saveSelectedCompany = (event) => {
        const companyId = event.currentTarget.dataset["id"];
        const companyName = event.currentTarget.dataset["name"];
        const companyInfo = {
            companyId,
            companyName,
            selectedCompanies: []
        }
        document.querySelectorAll(".companies-list").forEach(function (el) {
            el.classList.remove("outline");
        });
        event.currentTarget.classList.add("outline");
        this.props.setSelectedCompany(companyInfo)
    }

    filterCompanies = (inputField) => {
        const { companies } = this.state;
        const selectedCompanies = companies.filter(company => {
            return company.name.toLowerCase().includes(inputField.toLowerCase())
        })
        console.log(selectedCompanies)
        this.setState({ selectedCompanies });
    }

    handleSelectCompany = (company) => {
        this.setState({ selectedCompanies: company })
    }


    componentDidMount() {
        this.getCompany();
    }

    render() {
        const result = this.state.selectedCompanies.length !== 0 ? this.state.selectedCompanies : this.state.companies;
        return (
            <Fragment>
                <Search searchParams={this.filterCompanies} />
                <ul className="companies-ul">
                    {result.map((company, index) => <li className="companies-list" key={index} onClick={this.saveSelectedCompany} data-id={company.id} data-name={company.name} >{company.name}</li>)}
                </ul>
            </Fragment>
        )
    }
}

export { SelectCompany };