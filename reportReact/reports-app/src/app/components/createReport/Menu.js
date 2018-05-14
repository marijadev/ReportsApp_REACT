import React from 'react';

const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <li className="select-candidate-list menu-list">
                    <div className="menu-list-num-holder">
                        <span className="menu-list-num">1</span>
                    </div>
                    Select Candidate
                </li>
                <li className="select-company-list menu-list">
                    <div className="menu-list-num-holder">
                        <span className="menu-list-num">2</span>
                    </div>
                    Select Company
                </li>
                <li className="report-details-list menu-list">
                    <div className="menu-list-num-holder">
                        <span className="menu-list-num">3</span>
                    </div>
                    Fill Report Details
                </li>
            </ul>
            <span className="menu-separator"></span>
        </div>
    )
}

export { Menu };

