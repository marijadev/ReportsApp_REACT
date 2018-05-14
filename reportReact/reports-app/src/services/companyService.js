import { URL } from "../shared/constants";
import { myFetchGET } from "./apiService";
import { Company } from "../entities/Company";

class CompanyService {
    
    fetchCompanies(){
        return myFetchGET(URL.base + URL.companies)
            .then(companies => companies.map(company => new Company(company))) 
    }
}

export const companyService = new CompanyService();
