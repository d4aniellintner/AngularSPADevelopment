import { Component, OnInit } from "@angular/core";
import { FoodItem } from "../model/food-item.model";
import { FoodService } from "../foodService/food.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-integration-test",
  templateUrl: "./integration-test.component.html",
  styleUrls: ["./integration-test.component.scss"]
})
export class IntegrationTestComponent implements OnInit {
   ngOnInit() {
  }

}
