import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your Node.js application URL

  constructor(private http: HttpClient) { }
  preprocessECG(data: any[]): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/preprocess`, { data });
  }
  predict(data: any[]): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/predict`, data);
  }
  sendSensorData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/sensor-data`, data);
  }
}
