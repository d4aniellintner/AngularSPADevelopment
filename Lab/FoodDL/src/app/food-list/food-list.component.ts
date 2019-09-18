import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../model/Food';

@Component({
	selector: 'app-food-list',
	templateUrl: './food-list.component.html',
	styleUrls: [ './food-list.component.scss' ]
})
export class FoodListComponent implements OnInit {
	constructor() {}

	//foodlist2 = [ { Name: 'foodname' } ];
	displayedColumns: string[] = [ 'Name', 'Calories', 'Price' ];
	filterQuery: string;
	@Input() foodlist: Food[] = [];
	@Output() foodSelected: EventEmitter<Food> = new EventEmitter();
	ngOnInit() {}

	selectFood(f: Food) {
		this.foodSelected.emit(f);
	}

	doFilter() {
		//this.filterQuery = this.filterQuery.trim().toLowerCase();
		//this.foodlist.filter(f => (f.Name(this.filterQuery)));
	}
}
