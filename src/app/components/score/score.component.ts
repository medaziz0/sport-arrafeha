import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() X:any;
  myPath:string;
  constructor(private router:Router,) { }

  ngOnInit() {
    this.myPath = this.router.url;
  }

  scoreColor(sc1:number, sc2:number){
    if(sc1>sc2){
      return "green";
    }else if (sc1<sc2){
      return "red";
    }else{
      return "blue";
    }
  }

  deleteMatch(id){

  }
}
