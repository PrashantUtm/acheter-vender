import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewListingPage } from './new-listing.page';

const routes: Routes = [
  {
    path: '',
    component: NewListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewListingPageRoutingModule {}
