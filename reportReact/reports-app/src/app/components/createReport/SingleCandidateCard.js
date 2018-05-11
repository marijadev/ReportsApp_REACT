import React from 'react';

const SingleCandidateCard = ({ candidate }) => {

    
    return (
        <div className="single-candidate-outer-wrapper">
            <div className="single-candidate-holder">
                <div className="single-candidate-profile-photo-holder">
                    <img className="single-candidate-profile-photo" src={candidate.avatar} alt="face" />
                </div>
                <div className="single-candidate-profile-info">
                    <h3 className="single-candidate-name">{candidate.name}</h3>
                    <p className="single-candidate-email">{candidate.email}</p>
                </div>
            </div>
        </div>
    )
}

export { SingleCandidateCard };