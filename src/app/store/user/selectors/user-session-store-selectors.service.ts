import { computed, Injectable, Signal } from '@angular/core';
import { UserSessionModel } from '@shared/models/user-session.model';
@Injectable({
  providedIn: 'root',
})
export class UserSessionStoreSelectorsService {
  getUser = (user: Signal<UserSessionModel | null>): Signal<UserSessionModel | null> => {
    return computed(() => user());
  };
}
