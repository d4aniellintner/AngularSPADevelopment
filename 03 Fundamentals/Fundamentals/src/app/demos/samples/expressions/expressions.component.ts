import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-expressions",
  templateUrl: "./expressions.component.html",
  styleUrls: ["./expressions.component.scss"]
})
export class ExpressionsComponent implements OnInit {
  constructor() {}

  title: string = "Expressions & Interpolation";
  nbr: number = 6;

  ngOnInit() {}

  calc(){
    return 1 + 3 + this.nbr;
  }
}
