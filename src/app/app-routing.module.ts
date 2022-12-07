
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { GotComponent } from './got/got.component';
import { HomeComponent } from './home/home.component';

// O routingModule é responsável por podermos criar rotas e configurar quais componentes serão responsáveis por cada página.
const routes: Route[] = [
  {
    path: 'got',
    component: GotComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    // Para que tudo funcione como rotas de fato, precisamos importar o módulo de rotas do angular e dizer que essas rotas serão as rotas
    // principais da nossa aplicação.
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}