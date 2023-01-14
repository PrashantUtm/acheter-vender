import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingDetailsPage } from './listing-details.page';

const routes: Routes = [
  {
    path: '',
    component: ListingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingDetailsPageRoutingModule {}
