import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from 'src/app/core/Model/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MenuItem} from "primeng/api";
import {Table} from "primeng/table";

@Component({
  selector: 'app-doctorlistBack',
  templateUrl: './doctorlistBack.component.html',
  styleUrls: ['./doctorlistBack.component.css']
})
export class DoctorlistBackComponent implements OnInit {
  Users: any;
  allUsers: number = 0;
  pagination: number = 1;
  userList: User[] = [];
  search: string = '';
  searchText: string = '';
  user!: User;
  selectedUser!: User;
  showEditForm = false;
  items!: MenuItem[];
  sUser!: User;
  editDialog:boolean=false;
  constructor(private userService: UserService, private route: Router, private toastr: ToastrService) {}

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
    this.allUser();
    this.user = new User();
  }

  setSearch(event: any) {
    console.log("value", event.target.value);
    this.search = event.target.value;
  }

  FindbyNom() {
    this.userService.findByNom(this.search).subscribe((res) => {
      console.log("list from res :", res);
      if (res.length != 0) {
        this.userList = res;
      } else {
        this.userList = [];
      }
    });
  }

  allUser() {
    this.userService.getAll().subscribe((res) => {
      console.log(res);
      this.userList = res.filter(user => user.role === 'Doctor');
    });
  }

  add() {
    this.userService.create(this.user).subscribe(
      () => (this.userList = [this.user, ...this.userList])
    );
  }

  fetchDoctor() {
    this.userService.findByNom(this.pagination).subscribe((res: any) => {
      this.Users = res.data;
      this.allUsers = res.total;
      console.log(res.total);
    });
  }

  renderPage(event: number) {
    this.pagination = event;
    this.fetchDoctor();
  }

  deleteUser(idUser: any) {
    this.userService.delete(idUser).subscribe((data) => {
      console.log(idUser);
      this.allUser();
    }, error => {
      console.log(error);
      this.toastr.error(error.error.message, 'Error');
    });
  }

  editUser(user: User) {
    this.selectedUser = user;
    this.showEditForm = true;
  }

  cancelEdit() {
    this.showEditForm = false;
  }

  submitForm() {
    if (this.selectedUser) {
      this.userService.updateUser(this.selectedUser.idUser, this.selectedUser).subscribe(() => {
        this.showEditForm = false;
        this.allUser();
        this.toastr.success("User updated successfully");
      });
    }
  }


  clear(table: Table) {
    table.clear();
  }


  editU(user:any) {
    this.sUser=user;
    this.editDialog=true;
  }

  submitForm2() {
    if (this.selectedUser) {
      this.userService.updateUser(this.sUser.idUser, this.sUser).subscribe(() => {
        this.editDialog = false;
        this.allUser();
        this.toastr.success("User updated successfully");
      });
    }
  }
}
