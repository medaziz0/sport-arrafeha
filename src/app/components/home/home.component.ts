import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  match:any={id: 3, scoreOne: 1, scoreTwo: 1, teamOne: "ATM", teamTwo: "SEV"};
  constructor() { }

  ngOnInit() {
  }

}
