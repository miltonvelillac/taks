import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserSessionStoreHandlerService } from '@store/user/handler/user-session-store-handler.service';

export const sessionGuard: CanActivateFn = async (route, state) => {
  const userSessionStoreHandlerService = inject(UserSessionStoreHandlerService);
  const router = inject(Router);

  let attempts = 0;
  while (!userSessionStoreHandlerService.getUser$() && attempts < 10) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    attempts++;
  }

  if (!userSessionStoreHandlerService.getUser$()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
