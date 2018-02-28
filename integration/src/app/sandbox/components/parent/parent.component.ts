import { Component, OnInit, ViewChild } from '@angular/core';
import { Joke } from '@core/models/joke';
import { FileDownloadComponent } from '../file-download/file-download.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // for data-live component
  live = true;
  live2 = true;
  fileFormats: Array<string> = ['xlxs', 'pdf', 'docx', 'txt'];

  @ViewChild(FileDownloadComponent) fileDownloadComponent: FileDownloadComponent;

  fileFormatSelected(fileFormatSelected: string) {
    this.fileDownloadComponent.exportFromRadio({exportType: fileFormatSelected});
  }
}
