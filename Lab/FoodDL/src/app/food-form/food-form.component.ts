import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../model/Food';

@Component({
	selector: 'app-food-form',
	templateUrl: './food-form.component.html',
	styleUrls: [ './food-form.component.scss' ]
})
export class FoodFormComponent implements OnInit {
	@Input() food: Food;
	@Output() saveFood: EventEmitter<Food> = new EventEmitter();
	constructor() {}

	ngOnInit() {}
}
