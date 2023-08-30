import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { T } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matchesTab: any ;
  X: number = 14;
  pageOfItems: Array<any>;
  constructor(private myRouter:Router, private matchService: MatchService ) { }

  ngOnInit() {
    this.reloadData();
  }
  displayMatch(id: number){
    alert(`Match N° ${id} is displayed`);
    this.myRouter.navigate([`infoMatch/${id}`])
  }

  editMatch(id: number){
    alert(`Match N° ${id} is edited`)
    localStorage.setItem("matchId", JSON.stringify(id));
    this.myRouter.navigate([`editMatch/${id}`]);
  }

  deleteMatch(id: number){
    alert(`Match N° ${id} is deleted`);
    this.matchService.deleteMatch(id).subscribe((response)=>{
        console.log("here response after delete", response.msg);
    this.reloadData();    
      });
  }


  reloadData(){
    this.matchService.getAllMatches().subscribe((response) => {
      console.log("here response from BE", response);
      this.matchesTab = response.matches;
    }) ;
  }

  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
    }
}
