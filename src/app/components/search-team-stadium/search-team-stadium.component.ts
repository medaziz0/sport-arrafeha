import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Stadiums, Teams } from 'src/app/data/data';

@Component({
  selector: 'app-search-team-stadium',
  templateUrl: './search-team-stadium.component.html',
  styleUrls: ['./search-team-stadium.component.css']
})
export class SearchTeamStadiumComponent implements OnInit {

  searchteamstadiumForm : FormGroup;
  stadiumsTab:any=Stadiums;
  teamsTab:any=Teams;
 findedTeam:any={};
 errorMsg:string;
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchteamstadiumForm = this.formBuilder.group({
      stadiumName:["",[Validators.required, Validators.minLength(3)]],
    });
  }

  SearchTeamStadium(){
    let stadiumName = this.searchteamstadiumForm.value.stadiumName;
    let findedStadiumId;
    for (let i = 0; i < this.stadiumsTab.length; i++) {
      if (this.stadiumsTab[i].name == stadiumName) {
        (findedStadiumId=this.stadiumsTab[i].id)
        break;
      }
    }
    if(findedStadiumId){
      this.errorMsg = "";
      for (let i = 0; i < this.teamsTab.length; i++) {
        if (this.teamsTab[i].stadiumId == findedStadiumId) {
          this.findedTeam = this.teamsTab[i]
          break;
        }
      }
    } else {
      this.errorMsg="Team not found";
    }
    
  }
}
