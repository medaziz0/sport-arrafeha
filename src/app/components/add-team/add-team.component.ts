import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team:any={};
  addteam: FormGroup;
  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit() {}

  addTeam(){
    alert("ajout player clicked");
    this.teamService.addTeam(this.team).subscribe((data)=>{
      console.log("here response from BE", data.msg);
      this.router.navigate(["admin"]);
    });
  }

}
