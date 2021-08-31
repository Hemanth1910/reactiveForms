import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignemnt';
   signInForm : any =  FormGroup;
   result_data : any = [];
   searchValue : any = '';

  constructor( private formBuilder: FormBuilder, private service : HttpClient){
    console.log("hi")
  }
  
  ngOnInit(){
    this.signInForm = this.formBuilder.group({
      name : ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      contact: ['', [Validators.required ]]
    });
  }

  onSubmit() {
    if (this.signInForm.status === 'INVALID') {
      console.log("Hi", this.signInForm )
        alert("Please enter all details")        
    }else{
      console.log("Hi", this.signInForm.value)
      let obj ={
        name: this.signInForm.value.name,
        email: this.signInForm.value.email,
        password : this.signInForm.value.password,
        contact: this.signInForm.value.contact
      }
      this.result_data.push(obj);  
      this.signInForm.reset();
    }
  }

 
}
