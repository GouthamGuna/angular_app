import { Routes } from '@angular/router';
import { Login } from '../component/login/login';
import { Home } from '../component/home/home';
import { Video } from '../component/video/video';

export const routes: Routes = [
    {
        path: 'login',
        component: Login,
        data: { layout: 'empty' } // This route is for the login page, which has no header or footer
    },
    {
        path: 'home',
        component: Home,
        data: { layout: 'default' } // This route is for the home page, which has a header and footer
    },
    {
        path: 'videos',
        component: Video,
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
