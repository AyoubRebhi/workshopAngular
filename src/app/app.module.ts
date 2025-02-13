import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './components/residences/residences.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details-component/residence-details-component.component';
import { AddResidenceComponentComponent } from './components/residences/add-residence-component/add-residence-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    AddResidenceComponentComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    FooterComponentComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
