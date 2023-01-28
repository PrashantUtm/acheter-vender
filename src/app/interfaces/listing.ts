import { Category } from "../enums/category";
import { Condition } from "../enums/condition";
import { Status } from "../enums/status";

export interface Listing {
    id: string,
    title: string,
    description: string,
    price: number,
    dateAdded: Date,
    status: Status,
    condition: Condition,
    category: Category,
    seller: string,
    picture: string,
    interestedBuyers: string[],
    pickupLocation: string
}
