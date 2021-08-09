import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { InicioComponent } from './Pages/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
