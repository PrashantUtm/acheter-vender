import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../enums/category';
import { Condition } from '../enums/condition';
import { Status } from '../enums/status';
import { Listing } from '../interfaces/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http: HttpClient) { }

  public getAllListings(): Observable<Listing[]> {
    return this.http['get'](`${environment.baseUrl}listings`) as Observable<Listing[]>;
  }

  public getListingById(id: string): Observable<Listing> {
    return this.http['get'](`${environment.baseUrl}listings/${id}`) as Observable<Listing>;
  }

  public addListing(listing: Listing) {
    return this.http['post'](`${environment.baseUrl}listings`, listing);
  }

  public getCategories(): Observable<string[]> {
    return this.http['get'](`${environment.baseUrl}categories`) as Observable<string[]>;
  }

  public updateListing(listing: Listing): Observable<Listing> {
    return this.http['put'](`${environment.baseUrl}listings/${listing.id}`, listing) as Observable<Listing>;
  }

  public getNextListingId(): string {
    return crypto.randomUUID();
  }
}
