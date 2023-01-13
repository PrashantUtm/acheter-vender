import { Injectable } from '@angular/core';
import { Category } from '../enums/category';
import { Condition } from '../enums/condition';
import { Status } from '../enums/status';
import { Listing } from '../interfaces/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private _allListings: Listing[] = [
    {
      id: '1',
      title: 'earphone',
      description: '',
      category: Category.Electronic,
      price: 500,
      condition: Condition.Refurbished,
      status: Status.Available,
      seller: '2',
      dateAdded: new Date(2022, 11, 10),
      picture: 'https://www.energysistem.com/cdnassets/products/44976/principal_2000.jpg',
      interestedBuyers: []
    },
    {
      id: '2',
      title: 'Shoes',
      description: 'Available in sizes 8, 9, 10',
      category: Category.Garments,
      price: 1500,
      condition: Condition.New,
      status: Status.OutOfStock,
      seller: '1',
      dateAdded: new Date(2022, 1, 15),
      picture: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
      interestedBuyers: []
    },
    {
      id: '3',
      title: 'Dining table',
      description: 'Dining table out of Oak for 6 persons. Used for 15 years',
      category: Category.Furniture,
      price: 25000,
      condition: Condition.Used,
      status: Status.Available,
      seller: '3',
      dateAdded: new Date(2022, 8, 10),
      picture: 'https://teakworld.mu/wp-content/uploads/2022/04/Dining_table_MV35T.jpg',
      interestedBuyers: []
    },
    {
      id: '4',
      title: 'Water pump',
      description: '5000 rpm water pump, 5 years old',
      category: Category.Household,
      price: 15000,
      condition: Condition.Used,
      status: Status.Sold,
      seller: '3',
      dateAdded: new Date(2022, 12, 10),
      picture: 'https://resiglas.mu/wp-content/uploads/2020/10/qb60-web.jpg',
      interestedBuyers: ['1', '2']
    },
  ];

  constructor() { }

  public getAllListings(): Listing[] {
    return this._allListings;
  }
}
