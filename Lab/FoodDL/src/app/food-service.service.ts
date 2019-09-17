import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './model/Food';

@Injectable({
	providedIn: 'root'
})
export class FoodServiceService {
	constructor(private http: HttpClient) {}

	getFoodList(): Observable<Food[]> {
		return this.http.get<Food[]>('/assets/foodstore.json');
	}
}
