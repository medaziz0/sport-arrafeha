
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {

   StadiumTab : any;
  X: number = 14;
  constructor(private myRouter:Router) { }

  ngOnInit() {
    this.StadiumTab= JSON.parse(localStorage.getItem("stadiums") || "[]");
  }
  displayStadium(id: number){
    alert(`Stadium N° ${id} is displayed`);
    this.myRouter.navigate([`infoStadium/${id}`])
  }

  editStadium(id: number){
    alert(`Stadium N° ${id} is edited`)
    localStorage.setItem("stadiumId", JSON.stringify(id));
    this.myRouter.navigate([`editStadium/${id}`]);
  }

  deleteStadium(id: number){
    alert(`Stadium N° ${id} is deleted`)
    
  }

}
