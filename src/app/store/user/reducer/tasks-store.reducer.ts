import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState
} from '@ngrx/signals';
import { UserSessionModel } from '@shared/models/user-session.model';

type UserSessionState = {
  user: UserSessionModel | null;
  isLoading: boolean;
};

const initialState: UserSessionState = {
  user: null,
  isLoading: false,
};

export const UserSessionStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(
      (
        { user },
      ) => ({
        getUser: user,
      })
    ),
  withMethods((store) => ({
    setUser(userSession: UserSessionModel | null): void {
      patchState(store, { user: userSession });
    }
  }))
);
