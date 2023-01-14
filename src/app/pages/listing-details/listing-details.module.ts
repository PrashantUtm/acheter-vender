import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingDetailsPageRoutingModule } from './listing-details-routing.module';

import { ListingDetailsPage } from './listing-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingDetailsPageRoutingModule
  ],
  declarations: [ListingDetailsPage]
})
export class ListingDetailsPageModule {}
