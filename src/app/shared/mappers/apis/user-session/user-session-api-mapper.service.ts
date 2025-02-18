import { Injectable } from '@angular/core';
import { User } from '@firebase/auth';
import { UserSessionModel } from '@shared/models/user-session.model';

@Injectable({
  providedIn: 'root'
})
export class UserSessionApiMapperService {

  constructor() { }

  getUser(userFromApi: User | null): UserSessionModel {
    return {
      displayName: userFromApi?.displayName || '',
      email: userFromApi?.email || '',
      photoURL: userFromApi?.photoURL || '',
      uid: userFromApi?.uid || '',
    };
  }
}
