import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroUsuarioComponent } from './componentes/registro/registro.component';
import { GestionNegociosComponent } from './componentes/gestion-negocios/gestion-negocios.component';
import { CrearNegocioComponent } from './componentes/crear-negocio/crear-negocio.component';
import { DetalleNegocioComponent } from './componentes/detalle-negocio/detalle-negocio.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';


export const routes: Routes = [
    { path: '',component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroUsuarioComponent},
    { path: "gestion-negocios", component: GestionNegociosComponent},
    { path: "crear-negocio", component: CrearNegocioComponent },
    { path: "detalle-negocio/:codigo", component: DetalleNegocioComponent},
    { path: "busqueda/:texto", component: BusquedaComponent},
    {path: "**", pathMatch: "full", redirectTo: ""}
];
