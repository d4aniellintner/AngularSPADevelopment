import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../model/Food';

@Component({
	selector: 'app-food-list',
	templateUrl: './food-list.component.html',
	styleUrls: [ './food-list.component.scss' ]
})
export class FoodListComponent implements OnInit {
	constructor() {}

	@Input() foodlist: Food[];
	@Output() foodSelected: EventEmitter<Food> = new EventEmitter();
	ngOnInit() {}

	selectFood(f: Food) {
		this.foodSelected.emit(f);
	}
}
