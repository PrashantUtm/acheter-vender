import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingDetailsPageRoutingModule } from './listing-details-routing.module';

import { ListingDetailsPage } from './listing-details.page';
import { UpdateStatusComponent } from './modals/update-status/update-status.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingDetailsPageRoutingModule
  ],
  declarations: [ListingDetailsPage, UpdateStatusComponent]
})
export class ListingDetailsPageModule {}
