import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: User[] = [
    {
      id: '1',
      firstName: 'Olivier',
      lastName: 'Giroud',
      address: '1 street name, Curepipe',
      email: 'o.g@email.mu',
      contactNumber: '+230 5777 6661'
    },
    {
      id: '2',
      firstName: 'Marcus',
      lastName: 'Rash',
      address: '2 street name, Curepipe',
      email: 'm.r@email.mu',
      contactNumber: '+230 5777 6662'
    },
    {
      id: '3',
      firstName: 'Bruno',
      lastName: 'Fern',
      address: '3 street name, Curepipe',
      email: 'b.f@email.mu',
      contactNumber: '+230 5777 6663'
    },
    {
      id: '4',
      firstName: 'Hashraf',
      lastName: 'Hakimi',
      address: '4 street name, Curepipe',
      email: 'h.h@email.mu',
      contactNumber: '+230 5777 6664'
    },
  ];

  constructor() { }

  public getAllUsers(): User[] {
    return this._users;
  }

  public getCurrentUserId(): string {
    return '1';
  }

  public getUserById(id: string): User | undefined {
    return this._users.find(u => u.id === id);
  }
}
