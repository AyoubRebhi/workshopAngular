import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/services/residence.service';
import { Residence } from 'src/app/models/residence';

@Component({
  selector: 'app-residence-details-component',
  templateUrl: './residence-details-component.component.html',
  styleUrls: ['./residence-details-component.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence: Residence = {} as Residence;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private residenceService: ResidenceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.residence = this.residenceService.getResidence(+params['id']);
    });
  }

  nextResidence() {
    const nextId = this.residence.id + 1;
    if(this.residenceService.residenceExists(nextId)) {
      this.router.navigate(['/residences', nextId]);
    }
  }

  addResidence() {
    this.router.navigate(['/add-residence']);
  }

  updateResidence() {
    this.router.navigate(['/add-residence', this.residence.id]);
  }
}
