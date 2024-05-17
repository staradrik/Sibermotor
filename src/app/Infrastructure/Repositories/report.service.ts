import { Injectable } from '@angular/core';
import { ReportService } from '../../Core/Services/report.service';
import { ReportApiService } from '../Api/report-api.service';

@Injectable({
  providedIn: 'root'
})
export class ReportRepositoryService implements ReportService {

  constructor(private reportApiService: ReportApiService) { }
  public saveDataInCSV(data: any[], fileName: string): void {
    this.reportApiService.saveDataInCSV(data, fileName);
  }
}
