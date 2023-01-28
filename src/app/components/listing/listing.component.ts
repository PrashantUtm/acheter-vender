import { Component, Input, OnInit } from '@angular/core';
import { Listing } from 'src/app/interfaces/listing';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {

  @Input() public listing: Listing;

  constructor() { }

  ngOnInit() {}

  public getListingImage(): string {
    if(this.listing)
    {
      return this.listing.picture.startsWith('https://')
        ? this.listing.picture
        : `data:image/jpeg;base64,${this.listing.picture}`;
    }
    return '';
  }
}
