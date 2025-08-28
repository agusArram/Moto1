import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Productos} from './pages/products/products';
import {Contact} from './pages/contact/contact';

export const routes: Routes = [
  {path: '', component: Home}, //usamos path para la ruta, para que al ir a tal cosa va al que corresponde
  {path: 'nosotros', component: About},
  {path: 'productos', component: Productos},
  {path: 'contacto', component: Contact},
  {path: '**', redirectTo: ''} //eso si es el error 404, lo redirije a home
];
