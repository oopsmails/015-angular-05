import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import {
  FileDownloadService, FileFormats
} from 'shared/services/file-download/file-download.service';
import { MsgBetweenService } from 'shared/services/msg-between/msg-between.service';

@Component({
  selector: 'app-file-download-iframe',
  templateUrl: './file-download-iframe.component.html',
  styleUrls: ['./file-download-iframe.component.css']
})
export class FileDownloadIframeComponent implements OnDestroy {
  fileDownloadSubscription: Subscription;
  fileDownloadServiceUrl: SafeUrl;
  fileDownloadFormId = 'fileDownloadFormId';

  fileDownloadRequest = '';
  xConsumerName = '';

  constructor(private msgBetweenService: MsgBetweenService,
    private fileDownloadService: FileDownloadService,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: any,
    private appRef: ApplicationRef) {

    this.fileDownloadSubscription = this.msgBetweenService.getMessage().subscribe((eventData: { [key: string]: any | Array<any> }) => {
      this.onDownload(eventData);
    });
    this.fileDownloadServiceUrl = this.sanitizer.bypassSecurityTrustUrl(this.fileDownloadService.downloadUrl);
    this.xConsumerName = this.fileDownloadService.headerXConsumer;
  }

  getHeaderXConsumer(fileDownloadData: { [key: string]: any | Array<any> }) { // only for unit test purpose
    return fileDownloadData.xConsumerName !== null && typeof fileDownloadData.xConsumerName !== 'undefined' ?
      fileDownloadData.xConsumerName : 'defaultConsumer';
  }

  onDownload(fileDownloadData: { [key: string]: any | Array<any> }): void {
    const downloadFormat = this.fileDownloadService.getDownloadFileFormat(fileDownloadData);
    const downloadUrl = this.fileDownloadService.getDownloadFileUrl(downloadFormat);
    this.fileDownloadServiceUrl = this.sanitizer.bypassSecurityTrustUrl(downloadUrl);
    this.fileDownloadRequest = JSON.stringify(fileDownloadData.fileDownloadRequest);
    this.appRef.tick();
    const form: HTMLFormElement = <HTMLFormElement>this.document.getElementById(this.fileDownloadFormId);
    form.submit();
  }

  ngOnDestroy(): void {
    this.fileDownloadSubscription.unsubscribe();
  }

}
