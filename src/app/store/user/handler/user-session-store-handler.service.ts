import { effect, inject, Injectable, signal } from '@angular/core';
import { UserSessionStore } from '../reducer/tasks-store.reducer';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, user } from '@angular/fire/auth';
import { UserSessionModel } from '@shared/models/user-session.model';
import { UserSessionApiMapperService } from '@shared/mappers/apis/user-session/user-session-api-mapper.service';
import { UserSessionApiService } from '@shared/apis/user-session/user-session-api.service';
import { UserLoginModel } from '@shared/models/user-login.model';


@Injectable({
  providedIn: 'root'
})
export class UserSessionStoreHandlerService {
  readonly store = inject(UserSessionStore);
  readonly userSessionApiMapperService = inject(UserSessionApiMapperService);
  readonly userSessionApiService = inject(UserSessionApiService);
  
  private auth = inject(Auth);
  private user$ = signal<UserSessionModel | null>(null);

  getUser$ = this.store.getUser;

  setUser$ = effect(() => {
    const user = this.user$();
    this.store.setUser(user);
  });

  constructor() {
    this.loadUser();
  }

  async signUpByEmail(userLogin: UserLoginModel): Promise<void> {
    await this.userSessionApiService.signUpByEmail(userLogin);
  }

  async loginByEmail(userLogin: UserLoginModel): Promise<void> {
    await this.userSessionApiService.loginByEmail(userLogin);
  }

  async loginGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider);
  }

  async signOut(): Promise<void> {
    await signOut(this.auth);
  }

  private loadUser(): void {
    onAuthStateChanged(this.auth, userFromApi => {
      const user = this.userSessionApiMapperService.getUser(userFromApi);
      this.user$.update(() => user);
    });
  }
}
