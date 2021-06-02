import { FileUploadService } from './../file-upload.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  files: any = [];
  loading: boolean = false; // Flag variable
  private _file!: File; // Variable to store file
  // Variable to store file
  public get file(): File {
    return this._file;
  }
  public set file(value: File) {
    this._file = value;
  }

  // Inject service
  constructor(private fileUploadService: FileUploadService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
    this.files = event.target.files;
  }
  close() {
    this.modalService.dismissAll('close clicked');
    this.files = [];
  }
  removeFiles() {
    this.files = [];
  }
  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable
        }
      }
    );
  }
  download() {
    const _File_Saved_Path = localStorage['file'];
    var base64Parts = _File_Saved_Path.split(",");
   var fileFormat = base64Parts[0].split(";")[1];
   var fileContent = base64Parts[1];
   var file = new File([fileContent], "test", {type: 'text'});
   //return file;



    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // an array consisting of a single DOMString
    // var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); // the blob
    // const url = URL.createObjectURL(oMyBlob);


    const url = URL.createObjectURL(file)
    link.setAttribute('href', url);
    link.setAttribute('download', 'test.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
