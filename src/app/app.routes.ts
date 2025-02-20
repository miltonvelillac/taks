import { Routes } from '@angular/router';
import { sessionGuard } from '@shared/guards/session/session.guard';
import { RoutesUtils } from '@shared/utils/routes/routes.utils';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/layout/layout.component').then(c => c.LayoutComponent),
        canActivate: [sessionGuard],
        children: [
            {
                path: RoutesUtils.tasks,
                loadComponent: () => import('./pages/task-list-page/task-list-page.component').then(c => c.TaskListPageComponent)
            },
            {
                path: RoutesUtils.addTasks,
                loadComponent: () => import('./pages/add-task/add-task.component').then(c => c.AddTaskComponent)
            },
        ]
    },
    {
        path: RoutesUtils.login,
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: RoutesUtils.signUp,
        loadComponent: () => import('./pages/sign-up/sign-up.component').then(c => c.SignUpComponent)
    },
    { path: '**',   redirectTo: '', pathMatch: 'full' },
];
