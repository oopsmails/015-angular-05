import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'file-download',
  templateUrl: './file-download.component.html'
})
export class FileDownloadComponent {

  constructor(private httpClient: HttpClient) { }

  exportFile() {
    const txtUrl = 'http://localhost:8080/backendmock/downloadFile/txt?filename=testTxt.txt';
    const pdfUrl = 'http://localhost:8080/backendmock/downloadFile/pdf?filename=testPdf.pdf';
    const xlsxUrl = 'http://localhost:8080/backendmock/downloadFile/xlsx?filename=testXlsx.xlsx';
    const docxUrl = ' http://localhost:8080/backendmock/downloadFile/docx?filename=testDocx.docx';
    const txtFileName = 'testTxt.txt';
    const pdfFileName = 'testPdf.pdf';
    const xlsxFileName = 'testXlsx.xlsx';
    const docxFileName = 'testDocx.docx';

    this.getBlob(docxUrl).subscribe(blob => {
      saveAs(blob, docxFileName);
    });
  }

  getBlob(url: string): Observable<Blob> {
    return this.httpClient
      .get(url, {
        responseType: 'blob'
      });
  }

}
