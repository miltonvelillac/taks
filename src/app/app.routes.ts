import { Routes } from '@angular/router';
import { sessionGuard } from '@shared/guards/session/session.guard';

export const routes: Routes = [
    {
        path: 'tasks',
        loadComponent: () => import('./pages/task-list-page/task-list-page.component').then(c => c.TaskListPageComponent),
        canActivate: [sessionGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
    },
    { path: '**',   redirectTo: 'tasks', pathMatch: 'full' },
];
