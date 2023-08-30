import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {
  imcURL:string ="http://localhost:3000/imc";
  constructor(private http: HttpClient) { }

  calculImc(obj){
    return this.http.post<{ msg: any }>(this.imcURL,obj);
  }

  
}
