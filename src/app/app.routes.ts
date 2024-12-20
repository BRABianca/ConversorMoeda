import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoedaListComponent } from './moeda-list/moeda-list.component';
import { MoedaConverterComponent } from './moeda-converter/moeda-converter.component';
import { MoedaHistoricoComponent } from './moeda-historico/moeda-historico.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent, // Define AppComponent como a rota inicial
  },
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'moeda-list', component: MoedaListComponent }, // Lista de moedas
  { path: 'moeda-converter', component: MoedaConverterComponent }, // Conversor
  { path: 'moeda-historico', component: MoedaHistoricoComponent }, // Histórico
];

