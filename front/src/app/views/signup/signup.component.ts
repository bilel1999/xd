import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../../core/services/user.service';
import { User } from 'src/app/core/Model/user';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Form:FormGroup;
  constructor(private formBuilder:FormBuilder,private userService:UserService, private currentRoute: ActivatedRoute,private route: Router) {
    this.Form=this.formBuilder.group({
      nom:this.formBuilder.control(null,[Validators.required]),
      prenom:this.formBuilder.control(null,[Validators.required]),
      mail:this.formBuilder.control(null,[Validators.required , Validators.email]),
      role:this.formBuilder.control(null,[Validators.required,Validators.pattern(/^(Doctor|admin|patient)$/)]),
      password:this.formBuilder.control(null,[Validators.required]),

    })
  }
  user: User = new User();
  userList: User[] = [];
  action: string = '';
  ngOnInit(): void {
    this.user = new User();
    let id = this.currentRoute.snapshot.params['id'];
    this.user.idUser = id;
    if (id != null) {
      //update
      this.action = 'update';
      this.userService.get(id).subscribe((data: User) => {
        this.user = data;
      });
      console.log('=================>' + this.user);
    } else {
      //add
      this.action = 'add new';
      this.user = new User();
    }
    this.userService.getAll().subscribe((data: User[]) => {
      this.userList = data;
    });
  }
  saveUser(): void {
    let data = new User()
    data =  {
      idUser: this.user.idUser,
      nom: this.user.nom,
      prenom: this.user.prenom,
      mail: this.user.mail,
      role:this.user.role,
      password: this.user.password,
      age: this.user.age,
      sex: this.user.sex,
      weight: this.user.weight,
      chronicDisease: this.user.chronicDisease,
      numero: this.user.numero,
    };
    console.log(this.Form.value);
    this.userService.create(this.Form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.Form.reset();
          this.route.navigate(['/login']);

        },
        error: (e) => console.error(e)
      });
  }


  }

