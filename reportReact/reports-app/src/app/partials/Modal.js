import React, { Fragment } from 'react';
import { getDate } from '../../shared/utils';

const Modal = ({report}) => {
    
    return (
        <Fragment>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <p className="modal-h">{report.candidateName}</p>
                <div className="modal-inner-holder">
                    <ul className="modal-info">
                        <li className="modal-info-inner">
                            <p className="modal-inner-h">Company:</p>
                            {report.companyName}
                        </li>
                        <li className="modal-info-inner">
                            <p className="modal-inner-h">InterviewDate:</p>
                            {getDate(report.interviewDate)}
                        </li>
                        <li className="modal-info-inner">
                            <p className="modal-inner-h">Phase:</p>
                            {report.phase}
                        </li>
                        <li className="modal-info-inner">
                            <p className="modal-inner-h">Report Status:</p>
                            {report.status}
                        </li>
                    </ul>
                    <div className="modal-bio">
                        <p className="modal-inner-h">Note:</p>
                        {report.note}
                    </div>
                </div>
            </div>
        </div>

      </Fragment>
    )
}

export { Modal };
