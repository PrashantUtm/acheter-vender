import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewListingPageRoutingModule } from './new-listing-routing.module';

import { NewListingPage } from './new-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewListingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewListingPage]
})
export class NewListingPageModule {}
