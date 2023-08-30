import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImcService } from 'src/app/services/imc.service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {
  imcForm : FormGroup;
  imc:any={};
  resMsg:string;
  constructor(private formBuilder: FormBuilder,private imcService:ImcService) { }

  ngOnInit() {
    this.imcForm = this.formBuilder.group({
      nameFE:["",[Validators.required]],
      tailleFE:["" ,[Validators.required]],
      poidFE:["",[Validators.required]],
      
    });
  }

  IMC(){
    this.imcService.calculImc(this.imcForm).subscribe((data)=>{
      this.resMsg = data.msg;
    })
  }
}
