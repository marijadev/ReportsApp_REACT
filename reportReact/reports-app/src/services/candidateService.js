import { URL } from "../shared/constants";
import { myFetchGET } from "./apiService";
import { Candidate } from "../entities/Candidate";

class CandidateService {
    
    fetchCandidates(){
        return myFetchGET(URL.base + URL.candidates)
            .then(candidates => candidates.map(candidate => new Candidate(candidate))) 
    }
}

export const candidateService = new CandidateService();
