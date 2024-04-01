import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: '', component: LandPageComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent
    }
];
