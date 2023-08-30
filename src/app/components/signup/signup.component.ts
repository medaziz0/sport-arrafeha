import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;
  y:string="hello";
  errorMsg:string="";
  myPath:string;
  imagePreview:any;
  constructor(private formBuilder: FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.myPath=this.router.url
    this.signupForm = this.formBuilder.group({
      firstName:["",[Validators.required, Validators.minLength(3)]],
      lastName:["" ,[Validators.required, Validators.minLength(3)]],
      email:["",[Validators.required, Validators.email]],
      pwd:["",[Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      tel:[""],
      img:[""],
    });
  }

  signup(){
    this.myPath =="/subscription"
    ? (this.signupForm.value.role="user"):
      (this.signupForm.value.role="admin");
 
    this.userService.signup(this.signupForm.value,this.signupForm.value.img).subscribe((data)=>{
      console.log("here data after signup",data.msg);
      if(data.msg == "0"){
        this.errorMsg = "Email Exist";
      }else{
        this.router.navigate(["signin"])
      }
    })
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}
