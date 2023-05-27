import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { RendezVousService } from '../../core/services/rendez-vous.service';
import { Rdv } from 'src/app/core/Model/rdv';
import { User } from 'src/app/core/Model/user';
import { ActivatedRoute, Router } from '@angular/router';
import {MenuItem} from "primeng/api";
import {Table} from "primeng/table";

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  afficherListeRdvs: boolean = true;
  users: User[] = []; // Initialize users as an empty array
  rdvs: any[] = [];
  rdv: Rdv = {
    dateRdv: '',
    patient: new User(),
    medecin: new User(),
  };
  patientName!: string;
  medecinName!: string;
  items!: MenuItem[];
  add:boolean=false;
  constructor(private userService: UserService, private rdvService: RendezVousService,private currentRoute: ActivatedRoute,private route: Router) { }
  findUserByName(name: string): User | undefined {
    const nameParts = name.split(' ').filter(part => part.trim().length > 0);

    if (nameParts.length < 1) {
      return undefined;
    }

    return this.users.find((user: User) => {
      const userNameParts = [user.nom, user.prenom];
      return nameParts.every(part => userNameParts.includes(part));
    });
  }



  afficherFormulaire() {
    this.afficherListeRdvs = false;
  }

  retour() {
    this.afficherListeRdvs = true;
  }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Go Back',
        icon: 'pi pi-fw pi-angle-left',
        routerLink: ['/admin']

      },
      {
        label: 'Go Back',
        icon: 'pi pi-fw pi-angle-left',
        routerLink: ['/doctor']
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
    this.loadRdvs();
    this.loadUsers(); // Load users in ngOnInit

  }
  loadUsers(): void {
    this.userService.getAll().subscribe((data: User[]) => {
      this.users = data;
    });
  }


  loadRdvs(): void {
    this.rdvService.getRdvs().subscribe((data: any[]) => {
      this.rdvs = data;
    });
  }

  onEnregistrer(): void {
    const patient = this.findUserByName(this.patientName);
    const medecin = this.findUserByName(this.medecinName);

    if (!patient || !medecin) {
      alert('Invalid patient or medecin name');
      return;
    }

    const rdv: Rdv = {
      dateRdv: this.rdv.dateRdv,
      patient: patient,
      medecin: medecin
    };

    // Call createRdv() from RendezVousService to save the appointment to the database
    this.rdvService.createRdv(rdv).subscribe(
      (response) => {
        console.log('Appointment added successfully', response);
        this.rdvs.push(response); // Update the local list of appointments with the returned data
        this.afficherListeRdvs = true;
        this.add=false;
      },
      (error) => {
        console.error('Error adding appointment:', error);
      }
    );
  }


  supprimerRdv(i: number) {
    const rdvId = this.rdvs[i]._id;
    this.rdvService.deleteRdv(rdvId).subscribe(() => {
      this.rdvs.splice(i, 1);
    });
  }

  clear(table: Table) {
    table.clear();
  }


}
