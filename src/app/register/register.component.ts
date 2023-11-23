import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@ ]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
  })

  constructor(private fb:FormBuilder,private ds:DataService,private rout:Router){}

  ngOnInit(): void {
  }

  register(){
    var path = this.registerForm.value
    var email = path.email
    var psw = path.psw
    var cpsw = path.cpsw

      this.ds.userRegister(email,psw).subscribe({
        next: (result: any) => {
          alert(result.message)
          this.rout.navigateByUrl("")
        },
        error: (result: any) => {
          alert(result.error.message)
        }

      })
    
  }

}
