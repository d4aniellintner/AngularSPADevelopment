import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { FoodListComponent } from "./food-list.component";
import { FoodService } from "../../foodService/food.service";
import { FoodRowComponent } from "../food-row/food-row.component";
import { RatingPipe } from "../../pipe/rating.pipe";

describe("Integration Test:", () => {
  // let mockFS;
  // let foodService: FoodService;
  let foodData = [
    { name: "Pad Thai", rating: 5 },
    { name: "Butter Chicken", rating: 5 },
    { name: "Cannelloni", rating: 4 },
    { name: "Cordon Bleu", rating: 2 }
  ];

  let serviceResult = [
    { name: "Pad Thai", rating: 5 },
    { name: "Butter Chicken", rating: 5 },
    { name: "Cannelloni", rating: 4 }
  ];

  let fixture: ComponentFixture<FoodListComponent>;
  // let fs : FoodService;
  // let spyFoodService: jasmine.SpyObj<FoodService>;

  beforeEach(() => {
    // const spy = jasmine.createSpyObj("FoodService", ["getItems", "deleteItem"]);

    TestBed.configureTestingModule({
      declarations: [FoodListComponent, FoodRowComponent, RatingPipe],
      providers: [{ provide: FoodService, useValue: spy }],
      schemas: [NO_ERRORS_SCHEMA] //suppresses errors -> remove to check
    });

    fixture = TestBed.createComponent(FoodListComponent);

    spyFoodService = TestBed.get(FoodService);
    // fixture.debugElement.injector.get(mockFS);
    fixture.detectChanges();
  });

  //Test Test-Setup

  //   it("should be true", ()=>{
  //       expect(true).toBe(true);
  //   })

  it("should render each FoodItem as FoodItemRow", () => {
    spyFoodService.getItems.and.returnValue(of(foodData));
    // spyFoodService.deleteItem.and.returnValue(of(serviceResult));

    // fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(4);
    // expect(rows[0].componentInstance.food.name).toEqual("Pad Thai");
  });
});
