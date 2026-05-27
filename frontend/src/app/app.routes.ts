import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { RondaForm } from './components/ronda-form/ronda-form';
import { RondaList } from './components/ronda-list/ronda-list';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'crear-ronda',
    component: RondaForm,
  },
  {
    path: 'unirse',
    component: RondaList,
  },
];
