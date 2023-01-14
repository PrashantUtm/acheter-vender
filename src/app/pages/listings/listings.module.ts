import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingsPageRoutingModule } from './listings-routing.module';

import { ListingsPage } from './listings.page';
import { ListingComponent } from 'src/app/components/listing/listing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingsPageRoutingModule
  ],
  declarations: [ListingsPage, ListingComponent]
})
export class ListingsPageModule {}
