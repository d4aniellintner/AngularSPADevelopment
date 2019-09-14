import { FoodService } from "./food.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { FoodItem } from "../model/food-item.model";

describe("FoodService", () => {
  let service: FoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodService]
    });

    service = TestBed.get(FoodService);
  });

  it("should create a post in an array", () => {
    const item: FoodItem = { name: "Gulasch", rating: 2 };
    service.addItem(item);
    expect(service.items.length).toBeGreaterThanOrEqual(1);
  });

  it("should return the correct amount of items", () => {
    const g: FoodItem = { name: "Gulasch", rating: 2 };
    service.addItem(g);
    const f: FoodItem = { name: "Panierter Kabeljau", rating: 3 };
    service.addItem(f);
    expect(service.items.length).toBe(2);
  });

  it("should have the correct nbr of items after delete", () => {
    const g: FoodItem = { name: "Gulasch", rating: 2 };
    service.addItem(g);
    const f: FoodItem = { name: "Panierter Kabeljau", rating: 3 };
    service.addItem(f);
    service.deleteItem(g);
    expect(service.items.length).toBe(1);
  });

  it("should return the correct items after delete", done => {
    const g: FoodItem = { name: "Gulasch", rating: 2 };
    service.addItem(g);
    const f: FoodItem = { name: "Panierter Kabeljau", rating: 3 };
    service.addItem(f);
    service.deleteItem(g);

    service.getItems().subscribe(data => {
      expect(data).toEqual([{ name: "Panierter Kabeljau", rating: 3 }]);
      done();
    });
  });
});
