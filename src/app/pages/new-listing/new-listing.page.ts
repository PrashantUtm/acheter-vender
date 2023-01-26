import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingsService } from 'src/app/services/listings.service';
import { UserService } from 'src/app/services/user.service';

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
    private listingsService: ListingsService,
    private router: Router,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.listingsService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.listingForm = this.formBuilder.group({
      id: [this.listingsService.getNextListingId()],
      title: ['', [Validators.required, Validators.minLength(5)]],
      dateAdded: [new Date()],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      condition: [''],
      status: ['Available'],
      seller: [this.userService.getCurrentUserId()],
      picture: ['https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg']
    });
  }

  public addListing() {
    console.log('Listing form: ', this.listingForm);
    if (this.listingForm.valid) {
      this.listingsService.addListing(this.listingForm.value).subscribe(() => {
        this.listingForm.reset();
        this.location.back();
      });
    }
  }

}
