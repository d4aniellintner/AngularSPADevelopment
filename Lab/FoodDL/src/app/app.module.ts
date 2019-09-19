import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodContainerComponent } from './food-container/food-container.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';

@NgModule({
	declarations: [ AppComponent, FoodListComponent, FoodFormComponent, FoodContainerComponent, HomeComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
