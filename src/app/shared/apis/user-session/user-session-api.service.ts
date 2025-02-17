import { computed, inject, Injectable, signal } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, User, UserCredential, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { UserLoginModel } from '@shared/models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class UserSessionApiService {
  private auth = inject(Auth);

  constructor() { }

  async loginByEmail(userLogin: UserLoginModel): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, userLogin.email, userLogin.password);
  }

  async signUpByEmail(userLogin: UserLoginModel): Promise<UserCredential> {
    return await createUserWithEmailAndPassword(this.auth, userLogin.email, userLogin.password);
  }
}
