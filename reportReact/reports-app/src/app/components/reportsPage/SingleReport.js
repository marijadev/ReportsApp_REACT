import React, { Fragment } from 'react';
import { getDate } from "../../../shared/utils";

const SingleReport = ({report}) => {

    return (
      <Fragment>
            <ul className="single-report-holder">
              <li className="single-report-list">
                {report.companyName}
                <p className="single-report-p">Company</p>
              </li>
              <li className="single-report-list">
                {report.candidateName}
                <p className="single-report-p">Candidate</p>
              </li>
              <li className="single-report-list">
                {getDate(report.interviewDate)}
                <p className="single-report-p">Interview Date</p>
              </li>
              <li className="single-report-list">
                {report.status}
                <p className="single-report-p">Status</p>
              </li>
              <li className="single-report-list view-more">
                <img className="single-report-eye" src="http://webiconspng.com/wp-content/uploads/2017/09/Eyes-PNG-Image-11487.png" alt="eye" />
                <img className="single-report-x" src="https://vignette.wikia.nocookie.net/theloudhouse/images/a/a5/X.png/revision/latest?cb=20170917150003" alt="x" />
              </li>              
            </ul>
      </Fragment>
    )
}

export { SingleReport };
