import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PrimeUploadComponent } from './prime-upload/prime-upload.component';
import { Ng2FileuploadComponent } from './ng2-fileupload/ng2-fileupload.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    PrimeUploadComponent,
    Ng2FileuploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FileUploadModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
