import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera } from '@capacitor/camera';
import { CameraResultType } from '@capacitor/camera/dist/esm/definitions';
import { CacheKeys, CachingService } from 'src/app/services/caching.service';
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
  public uploadedImageSource: string;

  constructor(
    private cachingService: CachingService,
    private formBuilder: FormBuilder,
    private listingsService: ListingsService,
    private router: Router,
    private userService: UserService,
    private location: Location
  ) { 
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

  async ngOnInit() {
    const categories = await this.cachingService.get<string[]>(CacheKeys.Categories);
    if(categories) {
      this.categories = categories;
    }

    this.listingsService.getCategories().subscribe(async (categories) => {
      this.categories = categories;
      await this.cachingService.set(CacheKeys.Categories, categories);
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

  public async uploadPhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.uploadedImageSource = `data:image/jpeg;base64,${image.base64String}`;
  
    // assign value to form
    this.listingForm.patchValue({ picture: image.base64String });

  }

}
