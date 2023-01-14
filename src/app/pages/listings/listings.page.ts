import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    //this.allListings = this.listingsService.getAllListings();
    this.listingsService.getAllListings().subscribe((listings) => {
      this.allListings = listings;
      console.log('all listings:', this.allListings);
    });
  }

}
