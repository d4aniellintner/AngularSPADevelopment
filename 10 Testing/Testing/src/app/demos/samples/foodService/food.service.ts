import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { FoodItem } from "./../model/food-item.model";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<FoodItem[]>("/assets/food.json").subscribe(data => {
      this.items = data;
    });
  }

  items: FoodItem[] = [];

  getItems(): Observable<FoodItem[]> {
    return of(this.items);
  }

  deleteItem(item: FoodItem): Observable<boolean> {
    this.items = this.items.filter(f => f != item);
    return of(true);
  }

  addItem(item: FoodItem) {
    this.items.push(item);
  }
}
