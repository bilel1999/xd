import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})


export class ContactusComponent implements OnInit{
  Form:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.Form=this.formBuilder.group({
      nom:this.formBuilder.control(null,[Validators.required]),
      message:this.formBuilder.control(null,[Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  addMessage(){
    console.log(this.Form.value);
  }

}
