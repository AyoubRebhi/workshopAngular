import { Component } from '@angular/core';
import { Residence } from 'src/app/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "assets/images/R4.jpg", status: "En Construction" }
  ];

  favorites: Residence[] = [];
  
  showLocation(address: string) {
    if (address === "inconnu") {
      alert("L'adresse est inconnue.");
    } else {
      alert(`Adresse : ${address}`);
    }
  }

  addToFavorites(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
    }
  }

  searchText: string = '';

  get filteredResidences() {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
