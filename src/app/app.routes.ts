import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'tasks',
        loadComponent: () => import('./pages/task-list-page/task-list-page.component').then(c => c.TaskListPageComponent)
    },
    { path: '**',   redirectTo: 'tasks', pathMatch: 'full' },
];
