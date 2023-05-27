
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/Model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items!: MenuItem[];
  user: User = new User;
  profilePicture: File | undefined;
  editProfileD:boolean=false;
  data: any;
  options: any;
  data2: any;
  options2: any;
  constructor(private userService: UserService) {}
  ngOnInit(): void {

    this.data2 = {
      labels: ['Confirmed', 'Deleted', 'Pending'],
      datasets: [
        {
          data: [10,4,5],
          backgroundColor:[
            "#006400",
            "#8B0000",
            "#DAA520"
          ]
        }
      ]
    };
    this.options2 = {
      cutout: '60%',
      plugins: {
        title :{
          display: true,
          text:'Appointment',
          fontsize : 15
        },
        legend: {
          labels: {
          }
        }
      }
    };

    this.data = {
      labels: ['Patient', 'Doctor'],
      datasets: [
        {
          data: [50,7],
          backgroundColor:[
            "#808080",
            "#1E90FF"
          ]
        }
      ]
    };
    this.options = {
      cutout: '60%',
      plugins: {
        title :{
          display: true,
          text:'Users',
          fontsize : 15
        },
        legend: {
          labels: {
          }
        }
      }
    };





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
        label: 'Appointment',
        icon: 'pi pi-fw pi-book',
        routerLink:["/rdv"]
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        routerLink:["/"]
      },
    ];




    // Get the logged-in user's ID
    const loggedInUserId = this.userService.getLoggedInUserId();

    // Make sure the user ID is available before making the API call
    if (loggedInUserId) {
      this.userService.get(loggedInUserId).subscribe((userData: User) => {
        this.user = userData;
      });
    }
  }
  updateUser(): void {
    console.log(this.user.idUser,this.user)
    // Call the updateUser() method from the UserService to update the user data
    this.userService.updateUser(this.user.idUser, this.user).subscribe(
      (updatedUser: User) => {
        this.user = updatedUser;
        // Show a success message or do any other action you need after updating the user data
      },
      (error) => {
        console.log(error);
        // Handle the error or display an error message
      }
    );
  }
  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    if (files && files.length > 0) {
      this.profilePicture = files.item(0) || undefined;

    }
  }



  uploadProfilePicture(): void {
    // if (this.profilePicture) {
    //   this.userService.uploadProfilePicture({ idUser: this.user.idUser, file: this.profilePicture }).subscribe(
    //     (updatedUser: User) => {
    //       this.user = updatedUser;
    //       // Show a success message or do any other action you need after uploading the profile picture
    //     },
    //     (error) => {
    //       console.log(error);
    //       // Handle the error or display an error message
    //     }
    //   );
    // }
  }
}
