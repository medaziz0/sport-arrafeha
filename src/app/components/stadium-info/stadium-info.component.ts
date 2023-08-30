import { StadiumTab } from './../../data/data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-stadium-info',
  templateUrl: './stadium-info.component.html',
  styleUrls: ['./stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {

  id: any;
  StadiumTab: any;
  findedStadium: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.StadiumTab= JSON.parse(localStorage.getItem("stadiums") || "[]");
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.StadiumTab.length; i++) {
      if(this.StadiumTab[i].id == this.id){
        this.findedStadium = this.StadiumTab[i];
        break;
      }
    }
  }

}
