import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleViewComponent } from './single-view/single-view.component';
import { UpdateImageComponent } from './update-image/update-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    RegisterComponent,
    HeaderComponent,
    UploadImageComponent,
    SingleViewComponent,
    UpdateImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
