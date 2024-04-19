import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';

export const routes: Routes = [
    { path: '',component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: "**", pathMatch: "full", redirectTo: ""}
];
