import React from 'react';

const SelectedInfo = ({ info }) => {
    const {selectedCandidate, selectedCompany, selectedDetails} = info;
    return (
        <div>
            <ul className="info-menu">
                <li className="info-menu-list">
                    <h3 className="info-menu-h">Name:</h3>
                    {selectedCandidate.candidateName}
                </li>
                <li className="info-menu-list">
                    <h3 className="info-menu-h">Company:</h3>
                    {selectedCompany.companyName}
                </li>
                <li className="info-menu-list">
                </li>
            </ul>
        </div>
    )
}

export { SelectedInfo };

