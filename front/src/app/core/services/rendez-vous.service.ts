import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpXhrBackend} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { Rdv } from '../Model/rdv';
@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  private baseUrl = 'http://localhost:3003/rdv';
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
};
  rdvs: any;
  constructor(private http: HttpClient) { }
  
  getRdvs(): Observable<any> {
    return this.http.get<Rdv[]>(this.baseUrl+"/getRdvs",this.httpOptions);
  }
  
  createRdv(rdv: any): Observable<any> {
    return this.http.post(this.baseUrl+"/createRdv", rdv,this.httpOptions);
  }
  updateRdv(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateRdv/${id}`, data);
  }
  deleteRdv(id: string): Observable<any> {
    return this.http.delete(this.baseUrl +`/deleteRdv/${id}`, this.httpOptions);
  }
}
