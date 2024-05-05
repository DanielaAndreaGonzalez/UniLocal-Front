import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroUsuarioComponent } from './componentes/registro/registro.component';


export const routes: Routes = [
    { path: '',component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroUsuarioComponent},

    {path: "**", pathMatch: "full", redirectTo: ""}
];
