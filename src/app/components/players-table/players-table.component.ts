import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersTab } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
 
  playersTab : any;
  constructor(private myRouter:Router, private playerService:PlayerService) { }

  ngOnInit() {
    this.reloadData();
  }
  displayMatch(id: number){
    alert(`Player N° ${id} is displayed`)
    this.myRouter.navigate([`infoPlayer/${id}`])
  }

  editMatch(id: number){
    alert(`Player N° ${id} is edited`)
    localStorage.setItem("playerId", JSON.stringify(id));
    this.myRouter.navigate([`editPlayer/${id}`])
  }

  deleteMatch(id: number){
    alert(`Player N° ${id} is deleted`)
    this.playerService.deletePlayer(id).subscribe((response)=>{
      console.log("here response after delete", response.msg);
    this.reloadData();    
    });
  }

  reloadData(){
      this.playerService.getAllPlayers().subscribe((response) => {
      console.log("here response from BE", response);
      this.playersTab = response.players;
    }) ;
  }
}
