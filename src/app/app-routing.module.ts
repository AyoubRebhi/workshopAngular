import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ResidencesComponent } from './components/residences/residences.component';
import { ResidenceDetailsComponentComponent } from './components/residences/residence-details-component/residence-details-component.component';
import { AddResidenceComponentComponent } from './components/residences/add-residence-component/add-residence-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponentComponent },
  { path: 'add-residence', component: AddResidenceComponentComponent },
  { path: '**', component: NotFoundComponentComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
