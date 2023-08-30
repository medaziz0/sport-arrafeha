import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player:any={};
  addplayer: FormGroup;
  constructor(private playersService: PlayerService, private router: Router) {}

  ngOnInit() {}

  addPlayer(){
    alert("ajout player clicked");
    this.playersService.addPlayer(this.player).subscribe((data)=>{
      console.log("here response from BE", data.msg);
      this.router.navigate(["admin"]);
    });
  }

}
