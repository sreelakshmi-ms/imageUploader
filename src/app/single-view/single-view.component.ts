import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  pid:any=""
  pdata:any=[]

  constructor(private ar: ActivatedRoute, private ds: DataService, private rout: Router){}
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data.id
      this.ds.getSingleImage(this.pid).subscribe({
        next: (result: any) => {
          this.pdata = result.message
        }
      })
    })

  }

  updatePage(id:any){
      this.rout.navigateByUrl(`update-image/${id}`)
    }

  delete(){
    this.ds.deleteImage(this.pid).subscribe({
      next: (result: any) => {
        alert(result.message)
        this.rout.navigateByUrl("home")
      }
    })

  }

  }


