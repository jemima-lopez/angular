//importar modulos de router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

//array de configuracion de las rutas
const appRoutes: Routes=[
    {path:'', component: HomeComponent },
    {path:'zapatillas', component: ZapatillasComponent },
    {path:'videojuego', component: VideojuegoComponent },
    {path:'cursos', component: CursosComponent },
    {path:'cursos/:nombre', component: CursosComponent },
    {path: 'externo', component: ExternoComponent},
    {path: 'contacto', component: ContactoComponent },
    {path: '**', component: HomeComponent }
];

//exportar el modulo del router
export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
