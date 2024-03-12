import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DatosComponent } from './datos/datos.component'
import { HolamundoComponent } from './holamundo/holamundo.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent},
    { path: 'hola', component: HolamundoComponent},
    { path: 'datos', component: AboutComponent},
];
