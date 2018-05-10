import { URL } from "../shared/constants";
import { myFetchGET } from "./apiService";
import { Report } from "../entities/Report";

class ReportService {
    
    fetchReports(){
        return myFetchGET(URL.base + URL.reports)
            .then(reports => reports.map(report => new Report(report))) 
    }
}

export const reportService = new ReportService();
