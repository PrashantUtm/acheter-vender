import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { Listing } from 'src/app/interfaces/listing';
import { ListingsService } from 'src/app/services/listings.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  public allListings: Listing[] = [];

  constructor(
    private listingsService: ListingsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log('navigated back');
      this.setListings();
    });
    console.log('ngOnInit');
    this.setListings();
  }

  private setListings() : void {
    this.listingsService.getAllListings().subscribe((listings) => {
      this.allListings = listings;
      console.log('all listings:', this.allListings);
    });
  }

}
