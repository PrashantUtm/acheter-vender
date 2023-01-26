import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { Listing } from 'src/app/interfaces/listing';
import { User } from 'src/app/interfaces/user';
import { ListingsService } from 'src/app/services/listings.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  public allListings: Listing[] = [];
  public showFilteredByAvailableList = true;
  private users: User[];

  constructor(
    private listingsService: ListingsService,
    private userService: UserService,
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
    this.userService.getAllUsers().subscribe((users) => this.users = users);
  }

  public callSeller(sellerId) {
    const sellerContactNumber = this.users.find(user => user.id === sellerId)?.contactNumber;
    window.open(`tel:${sellerContactNumber}`);
  }

  public setListings() : void {
    this.listingsService.getAllListings().subscribe((listings) => {
      this.allListings = this.showFilteredByAvailableList 
        ? listings.filter(l => (l.status.toString()) === 'Available')
        : listings;
      console.log('all listings:', this.allListings);
    });
  }

}
