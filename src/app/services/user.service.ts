import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http['get'](`${environment.baseUrl}users`) as Observable<User[]>;
  }

  public getCurrentUserId(): string {
    return '1';
  }

  public getUserById(id: string): Observable<User> {
    return this.http['get'](`${environment.baseUrl}users/${id}`) as Observable<User>;
  }
}
