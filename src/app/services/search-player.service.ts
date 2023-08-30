import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchPlayerService {

  searchURL:string ="http://localhost:3000/search-player";
  constructor(private http: HttpClient) { }

  getSearchPlayerById(id){
    return this.http.get<{ search: any, msg:string }>(`${this.searchURL}/${id}`);
  }
}
