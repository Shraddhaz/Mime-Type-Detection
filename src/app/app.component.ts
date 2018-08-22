import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  title = 'Mime-Type-Detection';
  mimeTypeFromImage: string;
  mimeTypeFromServer: string;

  constructor(private appService: AppService) {  }

  @ViewChild("fileInput") fileInput;
  onFormSubmit() {
    this.resetComponentValues();
    const fileInputElement = this.fileInput.nativeElement;
    if(fileInputElement.files && fileInputElement.files[0]){
      const inputFile = fileInputElement.files[0];
      this.mimeTypeFromImage = inputFile.type ? inputFile.type : 'File corrupt or has no extension';
      this.appService.getMimeType(inputFile.name)
        .subscribe(
          (mimeType) => this.mimeTypeFromServer = mimeType.text(),
          () => this.mimeTypeFromServer = 'File corrupt or has no extension',
        );
    }
  }

  resetComponentValues(): any {
    this.mimeTypeFromImage='';
    this.mimeTypeFromServer='';
  }

}
