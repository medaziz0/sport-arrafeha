import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL:string ="http://localhost:3000/players";
  constructor(private http: HttpClient) { }

  getAllPlayers(){
    return this.http.get<{players:any}>(this.playerURL);
  }

  getPlayerById(id){
    return this.http.get<{player: any, msg:string }>(`${this.playerURL}/${id}`);
  }

  deletePlayer(id){
    return this.http.delete<{ msg: string }>(`${this.playerURL}/${id}`);
  }

  addPlayer(obj){
    return this.http.post<{ msg: string }>(this.playerURL, obj);
  }
  
  updatePlayer(obj){
    return this.http.put<{ msg:string }>(this.playerURL, obj);
  }

  searchPlayerByNameOrAge(obj){
    return this.http.post<{players:any}>(this.playerURL+"/searchPlayer",obj);
  }
}
