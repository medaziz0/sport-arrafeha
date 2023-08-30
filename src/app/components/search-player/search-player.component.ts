import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { SearchPlayerService } from 'src/app/services/search-player.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {

  searchplayerForm : FormGroup;
  id: any;
  players: any;
  constructor(private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private sPlayerservice: PlayerService) { }

  ngOnInit() {
    this.searchplayerForm = this.formBuilder.group({
      name:["",[Validators.required]],
      age:["",[Validators.required]], 
    });
    
  }

  SearchPlayer(){
    this.sPlayerservice.searchPlayerByNameOrAge(this.searchplayerForm.value).subscribe((data)=>{
      console.log("here object from BE", data);
      this.players = data.players;
    })
  }
  
}
