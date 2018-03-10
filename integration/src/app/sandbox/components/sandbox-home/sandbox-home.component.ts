import { Component, OnInit, ViewChild } from '@angular/core';
import { Joke } from '@core/models/joke';

import { MsgBetweenService } from 'shared/services/msg-between/msg-between.service';

import { FileDownloadComponent } from '../file-download/file-download.component';
import { FileDownloadService, FileFormats } from 'shared/services/file-download/file-download.service';

@Component({
  selector: 'app-sandbox-home',
  templateUrl: './sandbox-home.component.html'
})
export class SandboxHomeComponent {
  // for data-live component
  live = true;
  live2 = true;
  fileFormats: Array<string> = ['XLSX', 'PDF', 'DOCX', 'TXT'];
  downloadFileFormats: Array<string> = ['CSV'];

  @ViewChild(FileDownloadComponent) fileDownloadComponent: FileDownloadComponent;

  constructor(private msgBetweenService: MsgBetweenService,
              private fileDownloadService: FileDownloadService) {

    this.downloadFileFormats = Object.keys(FileFormats);
  }

  fileFormatSelected(fileFormatSelected: string) {
    this.fileDownloadComponent.exportFromRadio({ fileType: fileFormatSelected });
  }

  downFileFormatSelected(fileFormatSelected: string) {
    this.msgBetweenService.raiseMessage({ 'testNumber': 1, fileFormat: fileFormatSelected });
  }
}
