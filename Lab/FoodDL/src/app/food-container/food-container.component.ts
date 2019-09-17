import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../food-service.service';
import { Food } from '../model/Food';

@Component({
	selector: 'app-food-container',
	templateUrl: './food-container.component.html',
	styleUrls: [ './food-container.component.scss' ]
})
export class FoodContainerComponent implements OnInit {
	constructor(private service: FoodServiceService) {}

	foodlist: Food[];
	selectedFood: Food;
	ngOnInit() {
		this.service.getFoodList().subscribe((data) => {
			this.foodlist = data;
		});
	}

	onFoodSelected(f: Food) {
		console.log(f.Name);
		this.selectedFood = { ...f };
	}
}
