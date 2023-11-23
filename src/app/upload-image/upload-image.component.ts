import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  userId:any=""

  uploadForm = this.fb.group({
    title: [''],
    url: [''],
    desc: ['']
  })

  constructor(private fb: FormBuilder, private ds: DataService, private rout: Router) { }

  ngOnInit(): void {

  }

  upload() {
    var path = this.uploadForm.value
    var title = path.title
    var url = path.url
    var desc = path.desc
    if (localStorage.getItem("user")) {
      this.userId=localStorage.getItem("user")
      this.ds.uploadImage(title, url, desc, this.userId).subscribe({
        next: (result: any) => {
          alert(result.message)
          this.rout.navigateByUrl("home")
        },
        error: (result: any) => {
          alert(result.error.message)
        }

      })
    }
  }

}
