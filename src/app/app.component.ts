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
  mimeTypeOfFile: string;

  constructor(private appService: AppService) { }

  @ViewChild("fileInput") fileInput;
  onFormSubmit() {
    this.resetComponentValue();
    const fileInputElement = this.fileInput.nativeElement;
    if(fileInputElement.files && fileInputElement.files[0]){
      const inputFile = fileInputElement.files[0];
      this.appService.getMimeType(inputFile.name)
      .subscribe(
        (mimeType) => this.mimeTypeOfFile = mimeType.text(),
        () => this.mimeTypeOfFile = 'File corrupt or has no extension',
      );
    }
  }

  resetComponentValue(): any {
    this.mimeTypeOfFile='';
  }

}
