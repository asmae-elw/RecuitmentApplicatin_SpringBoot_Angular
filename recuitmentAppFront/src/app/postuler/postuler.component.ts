import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Offre } from '../offre/offre';
import { OffreService } from '../_services/offre.service';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  public offres: Offre[];
  public editOffre: Offre;
  public deleteOffre: Offre;

  constructor(private offreService: OffreService){}

  ngOnInit() {
    this.getOffres();
  }

  public getOffres(): void {
    this.offreService.getOffres().subscribe(
      (response: Offre[]) => {
        this.offres = response;
        console.log(this.offres);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
