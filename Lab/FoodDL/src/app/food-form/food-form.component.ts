import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../model/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceService } from '../food-service.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-food-form',
	templateUrl: './food-form.component.html',
	styleUrls: [ './food-form.component.scss' ]
})
export class FoodFormComponent implements OnInit {
	@Input() food: Food;
	@Output() saveFood: EventEmitter<Food> = new EventEmitter();
	constructor(private fs: FoodServiceService, private route: ActivatedRoute) {}

	ngOnInit() {
		let id = this.route.snapshot.params['id'];

		//if there is an id passed by route
		if (id != undefined) {
			console.log('id passed: ' + id);
			//find the given food-id from service
			this.fs.getFoodList().pipe(map((f) => f.find((f: Food) => f.Id == id))).subscribe((result) => {
				this.food = result;
			});
		}
	}
}
