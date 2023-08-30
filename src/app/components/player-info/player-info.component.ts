import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  
  id: any;
  player: any ;


  constructor(private activatedRoute: ActivatedRoute, private pService: PlayerService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.pService.getPlayerById(this.id).subscribe((data)=>{
      console.log("here object from BE", data);
      this.player = data.player;
    })
  }

}
