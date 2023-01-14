import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listings',
    pathMatch: 'full'
  },
  {
    path: 'listings',
    children: [
      { path: '', loadChildren: () => import('./pages/listings/listings.module').then( m => m.ListingsPageModule) },
      { path: ':listingid', loadChildren: () => import('./pages/listing-details/listing-details.module').then( m => m.ListingDetailsPageModule) }
    ]
  },
  {
    path: 'new-listing',
    loadChildren: () => import('./pages/new-listing/new-listing.module').then( m => m.NewListingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
