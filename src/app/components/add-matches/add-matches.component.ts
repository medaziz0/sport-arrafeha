import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css']
})
export class AddMatchesComponent implements OnInit {

  match:any={};
  addForm: FormGroup;
  constructor(private mService: MatchService, private router: Router) {}

  ngOnInit() {}

  addMatch(){
    alert("Add clicked");
    this.mService.addMatch(this.match).subscribe((data)=>{
        console.log("here response from BE", data.msg);
        this.router.navigate(["admin"]);
      });
  }
}
