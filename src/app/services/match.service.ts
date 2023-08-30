import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchURL:string ="http://localhost:3000/matches";
  constructor(private http: HttpClient) { }

  getAllMatches(){
    return this.http.get<{ matches: any }>(this.matchURL);
  }

  getMatchById(id){
    return this.http.get<{ match: any, msg:string }>(`${this.matchURL}/${id}`);
  }

  deleteMatch(id){
    return this.http.delete<{ msg: string }>(`${this.matchURL}/${id}`);
  }

  addMatch(obj){
    return this.http.post<{ msg: string }>(this.matchURL, obj);
  }
  

  updateMatch(obj){
    return this.http.put<{ msg:string }>(this.matchURL, obj);
  }
  
}
