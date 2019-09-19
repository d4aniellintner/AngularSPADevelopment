import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Food } from '../model/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceService } from '../food-service.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-food-form',
	templateUrl: './food-form.component.html',
	styleUrls: [ './food-form.component.scss' ]
})
export class FoodFormComponent implements OnInit, OnChanges {
	@Input() food: Food;
	@Output() saveFood: EventEmitter<Food> = new EventEmitter();
	foodForm: FormGroup;
	constructor(private fs: FoodServiceService, private route: ActivatedRoute, private fb: FormBuilder) {}

	ngOnInit() {
		this.foodForm = this.fb.group({
			Name: [ this.food.Name, Validators.required ],
			Calories: [ this.food.Calories, [ Validators.required, Validators.min(1) ] ],
			Price: [ this.food.Price, Validators.required ]
		});

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

	ngOnChanges(changes: SimpleChanges): void {
		if (this.foodForm)
			this.foodForm.patchValue({
				Name: this.food.Name,
				Price: this.food.Price,
				Calories: this.food.Calories
			});
	}

	onSave(form): void {
		/* do nothing */
	}
}
