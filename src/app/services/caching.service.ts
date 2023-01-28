import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  constructor() { }

  public async set(key: CacheKeys, value: object) {
    const jsonValue = JSON.stringify(value);
    await Preferences.set({ key: key, value: jsonValue });
  }

  public async get<T>(key: CacheKeys): Promise<T> {
    const keys = await Preferences.keys();

    if(keys.keys.includes(key)){
      const result = await Preferences.get({ key: key });
      const value = result.value;
      return JSON.parse(value) as T;
    }
    return null;
  }

  public async remove(key: CacheKeys) {
    await Preferences.remove({ key });
  }
}

export enum CacheKeys {
  Listings = "listings",
  Categories = "categories"
}
