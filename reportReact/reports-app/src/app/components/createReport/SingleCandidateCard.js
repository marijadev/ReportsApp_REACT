import React from 'react';

const SingleCandidateCard = ({ candidate, setSelectedCandidate }) => {

    const saveSelectedCandidate = (event) => {
        const candidateId = event.currentTarget.dataset["id"];
        const candidateName = event.currentTarget.dataset["name"];
        const candidateInfo = {
            candidateId,
            candidateName
        }
        document.querySelectorAll(".single-candidate-outer-wrapper").forEach(function (el) {
            el.classList.remove("outline");
        });
        event.currentTarget.classList.add("outline");
        setSelectedCandidate(candidateInfo)
    }

    return (
        <div className="single-candidate-outer-wrapper" data-name={candidate.name}  data-id={candidate.id} onClick={saveSelectedCandidate}>
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