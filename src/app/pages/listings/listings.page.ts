import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/interfaces/listing';
import { ListingsService } from 'src/app/services/listings.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  public allListings: Listing[] = [];

  constructor(private listingsService: ListingsService) { }

  ngOnInit() {
    this.allListings = this.listingsService.getAllListings();
    console.log('all listings:', this.allListings);
  }

}
