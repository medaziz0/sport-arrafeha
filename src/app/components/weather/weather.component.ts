import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherForm : FormGroup;
  result:any;
  constructor(private formBuilder: FormBuilder,private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      city:["",[Validators.required]],
    });
  }

  Weather(){
      console.log("here city",this.weatherForm.value);
  this.weatherService.getweatherById(this.weatherForm.value).subscribe((data)=>{
    console.log("here res from BE", data.result)
    this.result = data.result
  })
}}
