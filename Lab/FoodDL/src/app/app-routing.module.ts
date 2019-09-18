import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodContainerComponent } from './food-container/food-container.component';
import { HomeComponent } from './home/home.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'foodlist',
		component: FoodContainerComponent
	},
	{
		path: 'fooddetail/:id',
		component: FoodFormComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
