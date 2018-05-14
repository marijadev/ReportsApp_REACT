import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div className="container">
                <div className="inner-header">
                    <h1>Reports Administration</h1>
                    <div className="header-btn-holder">
                        <Link to="/"><button className="header-all-reports-btn reports-btn">Reports</button></Link>
                        <Link to="/newReport"><button className="header-create-report-btn reports-btn">Create Report</button></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header };