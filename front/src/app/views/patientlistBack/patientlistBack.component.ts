import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from 'src/app/core/Model/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {MenuItem} from "primeng/api";
import {Table} from "primeng/table";
@Component({
  selector: 'app-patientlistBack',
  templateUrl: './patientlistBack.component.html',
  styleUrls: ['./patientlistBack.component.css']
})
export class PatientlistBackComponent {
  Users:any;
  allUsers:number=0;
  pagination:number=1;
  items!: MenuItem[];
  constructor(private userService: UserService,private route:Router ,private toastr: ToastrService) {}
user!:User;
userList!: User[] ;
search!:string;
searchText!:string;

  ngOnInit(): void {

    this.items = [
      {
        label: 'Admin Dashboard',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/admin']
      },
      {
        label: 'Doctor List',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/doctorsback']

      },
      {
        label: 'Patient List',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/patientback']
      },
      {
        label: 'Rendez-Vous',
        icon: 'pi pi-fw pi-book',
        routerLink:["/rdv"]
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        routerLink:["/"]
      },
    ];


    this.fetchDoctor();
    console.log(this.fetchDoctor());

this.allUser();
this.user=new User();
  }
  setSearch(event:any){
    console.log("value",event.target.value);
    this.search =event.target.value;
  }
  FindbyNom(){

    this.userService.findByNom(this.search).subscribe((res) => {
      console.log("list from res :",res);
      if (res.length!=0){
        this.userList = res;
      }
      else{
        this.userList = [];
      }

    });

  }
  allUser() {
    this.userService.getAll().subscribe((res) => {
      this.userList = res.filter(user => user.role === 'Patient');
    });
  }

add() {
  this.userService.create
    (this.user)
    .subscribe(
      () => (this.userList = [this.user, ...this.userList])
    );
}

fetchDoctor() {
  this.userService.findByNom(this.pagination).subscribe((res: any) => {
  this.Users=res.data;
  this.allUsers=res.total;
  console.log(res.total);
  });
}
renderPage(event:number){
  this.pagination=event;
  this.fetchDoctor();
}
deleteUser(idUser: any) {

  this.userService.delete(idUser).subscribe((data) => {
    console.log(idUser);
    this.allUser();
  });
}
updateUser(idUser: any) {
  console.log(idUser);
  this.route.navigate(['/admin']);
}

  clear(table: Table) {
    table.clear();
  }


}
