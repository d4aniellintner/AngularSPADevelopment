import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { FoodListComponent } from "./food-list.component";
import { FoodService } from "../../foodService/food.service";
import { FoodRowComponent } from "../food-row/food-row.component";
import { RatingPipe } from "../../pipe/rating.pipe";
import { HttpClientModule, HttpClient } from "@angular/common/http";

describe("Integration Test:", () => {
  // let mockFS;

  let foodData = [
    { name: "Pad Thai", rating: 5 },
    { name: "Butter Chicken", rating: 5 },
    { name: "Cannelloni", rating: 4 },
    { name: "Cordon Bleu", rating: 2 }
  ];

  // let fs: FoodService = new FoodService(undefined);
  // fs.getItems = () => of(foodData);

  let deleteResult = [
    { name: "Pad Thai", rating: 5 },
    { name: "Butter Chicken", rating: 5 },
    { name: "Cannelloni", rating: 4 }
  ];

  let comp: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;
  let service: FoodService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodListComponent, FoodRowComponent, RatingPipe],
      providers: [
        { provide: HttpClient, useValue: null },
        { provide: FoodService, useValue: { getItems: () => foodData } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodListComponent);
    comp = fixture.componentInstance;
    service = TestBed.get(FoodService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(comp).toBeTruthy();
  });

  it("should render each FoodItem as FoodItemRow", () => {
    // spyOn(FoodService.prototype, "getItems").and.returnValue(of(foodData));

    // let fixture: ComponentFixture<FoodListComponent> = TestBed.createComponent(
    //   FoodListComponent
    // );
    // const comp = fixture.debugElement.componentInstance;
    // fixture.detectChanges();

    // fs.getItems.and.returnValue(of(foodData));
    // spyFoodService.deleteItem.and.returnValue(of(serviceResult));

    expect(comp.food.length).toBe(3);

    // expect(comp.debugElement.query(By.css("div")).nativeElement.lenght).toBe(4);

    // const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    // expect(rows.length).toEqual(4);
    // expect(rows[0].componentInstance.food.name).toEqual("Pad Thai");
  });
});
