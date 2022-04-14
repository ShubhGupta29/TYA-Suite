import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page2',
  templateUrl: './sign-up-page2.component.html',
  styleUrls: ['./sign-up-page2.component.css']
})
export class SignUpPage2Component implements OnInit {

  signUpForm2:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  

  this.signUpForm2=this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    companyName:['',Validators.required],
    emailAdd:['',Validators.required],
    password:['',Validators.required],
    phoneNo:['',Validators.required],
    agreement:['',Validators.required],
    recEmail:['',Validators.required]
  });
}

}
