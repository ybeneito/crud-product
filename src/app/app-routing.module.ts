import { ModifierComponent } from './modifier/modifier.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'ajouter', component: AjouterComponent },
  { path:'modifier/:id', component: ModifierComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation:'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
