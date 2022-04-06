import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

interface Options {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'tya',
  templateUrl: './tya.component.html',
  styleUrls: ['./tya.component.css']
})

export class TYAComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  signUpForm:FormGroup;
  selectedValue: string;
    selectedCar: string;
    selectedRadio: string;  
    webData = [
      { id: 1, name: 'PHP' },
      { id: 2, name: 'Laravel' },
      { id: 3, name: 'Angular' },
      { id: 4, name: 'React' }
    ];
    
    get ordersFormArray() {
      return this.signUpForm.controls.orders as FormArray;
    }
    
  
    options: Options[] = [
      {value: '0', viewValue: 'Option 1'},
      {value: '1', viewValue: 'Option 2'},
      {value: '2', viewValue: 'Option 3'},
    ];
  
    companyHaving: string[] = ['Holding Company', 'Subsidiary Company', 'Both'];  

  ngOnInit(): void {

    this.signUpForm=this.formBuilder.group({
      companyCode:['',Validators.required],
      companyTitle:['',Validators.required],
      companyLimitedBy:['',Validators.required],
      companyNature:['',Validators.required],
      authoriseCapital:['',Validators.required],
      paidUpCapital:['',Validators.required],
      objectOfCompany:['',Validators.required],
      gstNo:['',Validators.required],
      companyHaving:['',Validators.required],
      typesOfShares:new FormArray([]),
      listed:['',Validators.required],
    });

    this.addCheckboxesToForm();

  }

  
  private addCheckboxesToForm() {
    this.webData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }
}
