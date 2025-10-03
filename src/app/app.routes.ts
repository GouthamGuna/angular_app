import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Home } from './component/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'home',
        component: Home
    }
];
