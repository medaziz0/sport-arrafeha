import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersTab } from 'src/app/data/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  editplayerForm: FormGroup;
  id: number;
  player: any = {};
  constructor(private playersService:PlayerService, private router:Router) { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("playerId"));
    this.playersService.getPlayerById(this.id).subscribe((data)=>{
      this.player = data.player;
    })
  }

  validate(){
    this.playersService.updatePlayer(this.player).subscribe((result)=>{
      console.log("here result after update", result);
      this.router.navigate(["admin"]);
    });
  }

}
