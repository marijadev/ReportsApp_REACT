import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-header">
                    <h1>Reports Administration</h1>
                    <div className="header-btn-holder">
                        <button className="all-reports-btn reports-btn">Reports</button>
                        <button className="create-report-btn reports-btn">Create Report</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header };