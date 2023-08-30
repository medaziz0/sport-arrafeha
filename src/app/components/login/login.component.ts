import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginForm: FormGroup;
  errorMsg: string;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required]],
    });
  }

  login() {
    this.userService.login(this.user).subscribe((data) => {
      console.log("here data after login", data);
      if (data.result) {
        sessionStorage.setItem("token", data.result);
        let decodedToken: any = this.decodeToken(data.result);
        console.log("here decodeToken", decodedToken);
        decodedToken.role == "admin"
          ? this.router.navigate(["admin"])
          : this.router.navigate([""]);
      } else {
        this.errorMsg = "Please check Email/PWD";
      }
    });
  }

  decodeToken(token: string) {
    return jwt_decode(token);
  }
}
