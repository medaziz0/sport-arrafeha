import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  searchURL:string ="http://localhost:3000/weather";
  constructor(private http: HttpClient) { }

  getweatherById(obj){
    return this.http.post<{ result: any  }>(this.searchURL,obj);
  }
}
