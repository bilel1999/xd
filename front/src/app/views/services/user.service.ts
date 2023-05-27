import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private logoutUrl = 'your-api-url/logout';

  constructor(private http: HttpClient) {}

  // Other methods like login, register, etc.

  logout(): Observable<any> {
    return this.http.post(this.logoutUrl, {});
  }
}
