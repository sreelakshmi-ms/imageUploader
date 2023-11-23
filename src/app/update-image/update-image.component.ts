import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent implements OnInit {

  pid:any=""
  pdata:any=[]

  constructor(private ar:ActivatedRoute,private rout:Router,private ds:DataService){}

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data.id
    })

    this.ds.getSingleImage(this.pid).subscribe({
      next: (result: any) => {
        this.pdata = result.message
      }
    })

  }

  update(){
    this.ds.updateImage(this.pid,this.pdata).subscribe({
      next: (result: any) => {
        alert(result.message)
        this.rout.navigateByUrl("home")
      }
    })

  }

}
