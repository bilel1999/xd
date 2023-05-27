import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-test',
  template: '<ejs-schedule></ejs-schedule>',
  // templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  inputData: string = '';
  preprocessedData: string = '';
  predictions: any[] = []; // Fix this line
  items!: MenuItem[];
  constructor(private apiService: ApiService) {
    this.predictions = [];
  }

  async preprocessECG() {
    try {
      if (!this.inputData) {
        console.error('Input data is empty.');
        return;
      }
      const rawData = JSON.parse(this.inputData);
      const preprocessed = await this.apiService.preprocessECG(rawData).toPromise();
      this.preprocessedData = JSON.stringify(preprocessed);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async makePrediction() {
    try {
      if (!this.preprocessedData) {
        console.error('Preprocessed data is empty.');
        return;
      }
      const data = JSON.parse(this.preprocessedData);
      this.predictions = (await this.apiService.predict(data).toPromise())!;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Patient Dashboard',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/patient']
      },
      {
        label: 'Doctor List',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/doctors']

      },
      {
        label: 'Calendar',
        icon: 'pi pi-fw pi-book',
        routerLink: ['/addtest']
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        routerLink:["/"]
      },
    ];
  }

}
