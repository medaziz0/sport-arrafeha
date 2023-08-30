import { StadiumTab } from './../../data/data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  addstadiumForm:FormGroup;
  currentId: number = 1;
    constructor(private formBuilder:FormBuilder) { }
    ngOnInit() {
     this.addstadiumForm = this.formBuilder.group({
      id:[]  ,
        name: ["",[Validators.required]],
        capacity:["",[Validators.required]],
        country:[""],
      })
    }
    addStadium(){
      var StadiumTab = JSON.parse(localStorage.getItem("stadiums") || "[]");
      this.addstadiumForm.value.id=this.generateId(StadiumTab)+1;
      StadiumTab.push(this.addstadiumForm.value);
      localStorage.setItem("stadiums", JSON.stringify(StadiumTab));
    }
    generateId(t:any) {
      if (t.length == 0) {
          return 1;
      }
      else {
          var max = t[0].id;
          for (let i = 1; i < t.length; i++) {
              if (t[i].id > max) {
                  max = t[i].id;
              }
          }
          return max;
      }
  }
    }