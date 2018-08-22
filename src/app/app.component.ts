import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {

  // Creating initial component variables
  @ViewChild("fileInput") fileInput;
  title = 'Mime-Type-Detection';
  mimeTypeOfFile: string;

  constructor(private appService: AppService) { }

  /*
  onFileSubmit makes a POST call to the server with the file
  in payload and fetches the MIME type of that file
  */
  onFileSubmit() {
    this.resetComponentValue();
    const fileInputElement = this.fileInput.nativeElement;
    if(fileInputElement.files && fileInputElement.files[0]){
      const inputFile = fileInputElement.files[0];
      this.appService.getMimeType(inputFile.name)
      .subscribe(
        (mimeType) => this.mimeTypeOfFile = mimeType.text(),
        () => this.mimeTypeOfFile = 'MIME type not found (File corrupt / no extension)',
      );
    }
  }

  // Resets the variable to empty string
  resetComponentValue(): any {
    this.mimeTypeOfFile='';
  }

}
