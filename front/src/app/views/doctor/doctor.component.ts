import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from 'src/app/core/Model/user';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  user: User = new User;
  profilePicture: File | undefined;
  items!: MenuItem[];
  editProfileD:boolean=false;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Doctor Dashboard',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/doctor']

      },
      {
        label: 'Patient List',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/patients']
      },
      {
        label: 'Appointment',
        icon: 'pi pi-fw pi-book',
        routerLink:["/rdv"]
      },
      {
        label: 'calendrier',
        icon: 'pi pi-fw pi-book',
        routerLink:["/addtest"]
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
