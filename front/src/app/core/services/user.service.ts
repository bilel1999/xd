import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {User} from '../Model/user';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';@

Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUserId: number | null = null;
  private url = 'http://localhost:3003/User';
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
};
  users: any;
constructor(private http: HttpClient) { }
setLoggedInUserId(id: number): void {
  this.loggedInUserId = id;
}

getLoggedInUserId(): number | null {
  return this.loggedInUserId;
}

getAll(): Observable<User[]> {
  return this.http.get<User[]>(this.url+"/showUser",this.httpOptions);
}

create(data: any): Observable<any> {
  return this.http.post(this.url+"/addUser", data,this.httpOptions);
}
  
public setRoles(roles: []) {
  localStorage.setItem('roles', JSON.stringify(roles));
}

public getRoles(): [] {
  return JSON.parse(localStorage.getItem('roles') as any);
}
login(data: any): Observable<any> {
  return this.http.post(this.url+"/login", data,this.httpOptions);
}

public setToken(jwtToken: string) {
  localStorage.setItem('jwtToken', jwtToken);
}

  
public setuser(user: []) {
  localStorage.setItem('user',JSON.stringify(user));
}

findByNom(nom: any): Observable<User[]> {
  return this.http.get<User[]>(this.url+"/getBynom/"+nom,this.httpOptions);
}

get(id: any): Observable<User> {
  return this.http.get<User>(`${this.url}/showUser/${id}`,this.httpOptions);
}
delete(idUser: any): Observable<Object> {
  return this.http.delete(this.url + `/delUser/${idUser}`, this.httpOptions);
}

updateUser(idUser: string, updatedUser: User): Observable<User> {
  return this.http.put<User>(`${this.url}/updateUser/${idUser}`, updatedUser, this.httpOptions);

}
uploadProfilePicture({ idUser, file }: { idUser: string; file: File; }): Observable<User> {
  const formData = new FormData();
  formData.append('photo', file); // Make sure this field name matches the one expected by Multer

  return this.http.post<User>(`${this.url}/updateUser/${idUser}/picture`, formData);
}



}





