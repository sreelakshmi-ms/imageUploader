import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { UpdateImageComponent } from './update-image/update-image.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:UserLoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"upload-image",component:UploadImageComponent},
  {path:"single-view/:id",component:SingleViewComponent},
  {path:"update-image/:id",component:UpdateImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
