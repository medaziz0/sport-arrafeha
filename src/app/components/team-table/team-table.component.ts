import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {

  teamTab: any;
  constructor(private myRouter:Router, private teamService: TeamService) { }

  ngOnInit() {
    this.reloadData();
  }
  displayMatch(id: number){
    alert(`Match N° ${id} is displayed`)
    this.myRouter.navigate([`infoTeam/${id}`])
  }

  editMatch(id: number){
    alert(`Match N° ${id} is edited`)
    this.myRouter.navigate([`editTeam/${id}`])
  }

  deleteMatch(id: number){
    alert(`Match N° ${id} is deleted`)
    this.teamService.deleteTeam(id).subscribe((response)=>{
      console.log("here response after delete", response.msg);
    this.reloadData();    
    });
  }

  reloadData(){
    this.teamService.getAllTeams().subscribe((response) => {
      console.log("here response from BE", response);
      this.teamTab = response.teams;
    }) ;
  }
}
