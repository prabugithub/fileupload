import { PrimeUploadComponent } from './prime-upload/prime-upload.component';
import { UploadComponent } from './upload/upload.component';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'files-uploader';

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(UploadComponent, { centered: true });
    modalRef.componentInstance.name = 'World';
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  openPrimeNgUploader() {
    const modalRef = this.modalService.open(PrimeUploadComponent, { centered: true });
    modalRef.componentInstance.name = 'World';
  }
}
