import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Status } from 'src/app/enums/status';
import { Listing } from 'src/app/interfaces/listing';
import { User } from 'src/app/interfaces/user';
import { ListingsService } from 'src/app/services/listings.service';
import { UserService } from 'src/app/services/user.service';
import { UpdateStatusComponent } from './modals/update-status/update-status.component';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss'],
})
export class ListingDetailsPage implements OnInit {

  public listing: Listing;
  public isSellerLoggedIn = false;

  private seller: User;
  private interestedUsers: User[];
  private updateStatusEventEmitter = new EventEmitter<Status>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private listingsService: ListingsService,
    private modalController: ModalController,
    private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if(paramMap.has('listingid')) {
        console.log(paramMap.get('listingid'));
        this.listingsService.getListingById(paramMap.get('listingid')).subscribe((listing) => {
          this.listing = listing;
          this.setSeller();

          this.isSellerLoggedIn = this.listing.seller === this.userService.getCurrentUserId();
        })
      }
    });

    this.updateStatusEventEmitter
      .subscribe(status => this.updateStatus(status));
  }
  
  public getLabelForStatus(): string {
    const status = this.listing?.status.toString();
    switch(status) {
      case Status[Status.OutOfStock]:
        return 'Out of stock';
      default:
        return status;
    }
  }

  public getClassForStatus(): string {
    const status = this.listing?.status.toString();
    switch(status) {
      case Status[Status.Available]:
        return 'available';
      case Status[Status.OutOfStock]:
        return 'out-of-stock';
      case Status[Status.Sold]:
        return 'sold';
      default:
        return 'unknown';
    }
  }

  public callSeller(): void {
    window.open(`tel:${this.seller.contactNumber}`);
  }
  
  public isCurrentUserInterested(): boolean {
    return this.listing?.interestedBuyers?.includes(this.userService.getCurrentUserId());
  }

  public updateInterest(): void {
    const userIdIndex = this.listing.interestedBuyers.indexOf(this.userService.getCurrentUserId());
    if( userIdIndex === -1) {
      this.listing.interestedBuyers.push(this.userService.getCurrentUserId());
    } else {
      this.listing.interestedBuyers.splice(userIdIndex, 1);
    }
    this.updateListing();
  }

  public async openUpdateStatusModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: UpdateStatusComponent,
      componentProps: {
        updateStatusEvent: this.updateStatusEventEmitter
      }
    });
    modal.present();
  }

  private updateStatus(status: Status): void {
    this.listing.status = status;
    this.updateListing();
  }

  private updateListing(): void {
    this.listingsService.updateListing(this.listing).subscribe((listing) => {
      this.listing = listing;
    });
  }

  private setSeller(): void {
    this.userService.getUserById(this.listing.seller)
    .subscribe((user) => this.seller = user);
  }

  private setInterestedUsers(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.interestedUsers = users.filter(u => 
        this.listing.interestedBuyers?.includes(u.id));
    });
  }
}
