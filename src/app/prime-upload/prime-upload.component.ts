import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-upload',
  templateUrl: './prime-upload.component.html',
  styleUrls: ['./prime-upload.component.css']
})
export class PrimeUploadComponent implements OnInit {

  uploadedFiles: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    //this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
}
