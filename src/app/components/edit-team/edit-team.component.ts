
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  editForm: FormGroup;
  id: number;
  team: any = {};
  constructor(private teamService:TeamService, private router:Router) { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("teamId"));
    this.teamService.getTeamById(this.id).subscribe((data)=>{
      this.team = data.team;
    })
  }

  validate(){
    this.teamService.updateTeam(this.team).subscribe((result)=>{
      console.log("here result after update", result);
      this.router.navigate(["admin"]);
    });
  }

}
