import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PairSessionComponent } from './pages/pair-session/pair-session.component';

const appRoutes = [
    { path: '', component: HomeComponent,  pathMatch: 'full'},
    { path: 'session', component: PairSessionComponent }
];

export const routing = RouterModule.forRoot(appRoutes);