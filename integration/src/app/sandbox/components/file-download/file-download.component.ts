import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'file-download',
  templateUrl: './file-download.component.html'
})
export class FileDownloadComponent {
  private txtUrl = '/backendmock/downloadFile/txt?filename=testTxt.txt'; // with proxy.conf.json
  private pdfUrl = 'http://localhost:8080/backendmock/downloadFile/pdf?filename=testPdf.pdf';
  private xlsxUrl = '/backendmock/downloadFile/xlsx?filename=testXlsx.xlsx';
  private docxUrl = ' http://localhost:8080/backendmock/downloadFile/docx?filename=testDocx.docx';
  private txtFileName = 'testTxt.txt';
  private pdfFileName = 'testPdf.pdf';
  private xlsxFileName = 'testXlsx.xlsx';
  private docxFileName = 'testDocx.docx';

  exportFrameSrc: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private httpClient: HttpClient) {
      this.exportFrameSrc = sanitizer.bypassSecurityTrustResourceUrl(this.xlsxUrl);
    }

  exportFile() {
    this.getBlob(this.xlsxUrl).subscribe(
      blob => {
      saveAs(blob, this.xlsxFileName);
      },
      err => { }
    );
  }

  exportFromRadio(exportData: { [key: string]: any | Array<any> }): void {
    console.log('in exportFromRadio, exportData: ', exportData);
    const fileType = exportData.exportType;
    this.postRespBlob(this.getFileInfo(fileType).fileUrl).subscribe(
      blob => {
        console.log('blob: ', blob);
        this.saveBlobToFile(blob, this.getFileInfo(fileType).fileName);
      },
      err => {
        console.log('err: ', err);
      }
    );
  }

  exportWatchlist(exportForm) {
    console.log('exportForm: ', exportForm);

    // this.httpClient
    //   .post(this.xlsxUrl, {
    //     responseType: 'blob'
    //   }).subscribe(blob => {
    //   saveAs(blob, this.xlsxFileName);
    // });

    const fileType = 'docx';
    this.postRespBlob(this.getFileInfo(fileType).fileUrl).subscribe(
      blob => {
        console.log('blob: ', blob);
        this.saveBlobToFile(blob, this.getFileInfo(fileType).fileName);
      },
      err => {
        console.log('err: ', err);
      }
    );
  }

  postRespBlob(url: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Access-Control-Allow-Origin', '*');
    return this.httpClient
      .post(url
        , {} // empty POST body
        , {
          responseType: 'blob'
        }
      );
  }

  getBlob(url: string): Observable<Blob> {
    return this.httpClient
      .get(url, {
        responseType: 'blob'
      });
  }

  saveBlobToFile(blob: Blob, fileName: string) {
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.target = '_blank';
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
    }
  }

  private getFileInfo(fileType: string): any {
    switch (fileType) {
      case 'xlsx': {
         return {
           fileName: this.xlsxFileName,
           fileUrl: this.xlsxUrl
         };
      }
      case 'docx': {
        return {
          fileName: this.docxFileName,
          fileUrl: this.docxUrl
        };
      }
      case 'pdf': {
        return {
          fileName: this.pdfFileName,
          fileUrl: this.pdfUrl
        };
      }
      case 'txt': {
        return {
          fileName: this.txtFileName,
          fileUrl: this.txtUrl
        };
      }
      default: {
        return {
          fileName: this.xlsxFileName,
          fileUrl: this.xlsxUrl
        };
      }
   }
  }
}
