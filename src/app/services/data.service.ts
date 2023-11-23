import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl="http://localhost:5000"


  constructor(private http:HttpClient) { }



  userRegister(email:any,psw:any){
    const body={email,psw}
    return this.http.post(`${this.baseUrl}/user-register`,body)
  }

  userLogin(email:any,psw:any){
    const body={email,psw}
    return this.http.post(`${this.baseUrl}/user-login`,body)
  }

  uploadImage(title:any,url:any,desc:any,userId:any){
    const body={title,url,desc,userId}
    return this.http.post(`${this.baseUrl}/upload-image`,body)
  }

  getImages(userId:any){
    return this.http.get(`${this.baseUrl}/image-access/${userId}`)
  }

  getSingleImage(id:any){
    return this.http.get(`${this.baseUrl}/single-image/${id}`)
  }

  deleteImage(id:any){
    return this.http.delete(`${this.baseUrl}/image-delete/${id}`)
  }

  updateImage(id:any,bodyData:any){
    return this.http.post(`${this.baseUrl}/update-image/${id}`,bodyData)
  }

}
