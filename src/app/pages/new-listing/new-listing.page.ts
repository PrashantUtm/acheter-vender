import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListingsService } from 'src/app/services/listings.service';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.page.html',
  styleUrls: ['./new-listing.page.scss'],
})
export class NewListingPage implements OnInit {

  public listingForm: FormGroup;
  public categories: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private listingsService: ListingsService
  ) { }

  ngOnInit() {
    this.listingsService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.listingForm = this.formBuilder.group({
      id: ['5'],
      title: [''],
      dateAdded: [new Date()],
      description: [''],
      price: [''],
      category: [''],
      status: ['Available'],
      picture: ['https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg']
    });
  }

  public addListing() {
    console.log('Listing form: ', this.listingForm.value);
    this.listingsService.addListing(this.listingForm.value).subscribe(() => {
      console.log('added');
    });
  }

}
