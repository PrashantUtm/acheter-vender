import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Status } from 'src/app/enums/status';
import { Listing } from 'src/app/interfaces/listing';
import { ListingsService } from 'src/app/services/listings.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss'],
})
export class ListingDetailsPage implements OnInit {

  public listing: Listing;

  constructor(
    private activatedRoute: ActivatedRoute,
    private listingsService: ListingsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if(paramMap.has('listingid')) {
        console.log(paramMap.get('listingid'));
        this.listingsService.getListingById(paramMap.get('listingid')).subscribe((listing) => {
          this.listing = listing;
        })
      }
    });
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
}
