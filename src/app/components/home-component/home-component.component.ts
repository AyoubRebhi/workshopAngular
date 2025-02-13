import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/app/models/residence';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  listResidences: Residence[] = [
    { id: 1, name: 'Residence 1', address: 'Address 1', image: 'assets/images/R1.jpg', status: 'Disponible' },
    { id: 2, name: 'Residence 2', address: 'Address 2', image: 'assets/images/R1.jpg', status: 'Vendu' },
    { id: 3, name: 'Residence 3', address: 'Address 3', image: 'assets/images/R1.jpg', status: 'En Construction' }
  ];
   // Ajouter le constructeur avec le Router
   constructor(private router: Router) {}

   // Ajouter la méthode manquante
   showDetails(id: number) {
     this.router.navigate(['/residences', id]);
   }
}
