import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image:any=[]
  userId:any=""

  constructor(private ds:DataService,private rout:Router){}

  ngOnInit(): void {
    this.userId=localStorage.getItem("user")
    this.ds.getImages(this.userId).subscribe({
      next:(result:any)=> {
          this.image=result.message
          console.log(this.image);
          
      }
    })

  }

  addPage(){
    this.rout.navigateByUrl("upload-image")
  }

}
