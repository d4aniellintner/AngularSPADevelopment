import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-param-map",
  templateUrl: "./param-map.component.html",
  styleUrls: ["./param-map.component.scss"]
})
export class ParamMapComponent implements OnInit {
  constructor() {}

  links: { label: string; id: number }[] = [
    { label: "Route A", id: 1 },
    { label: "Route B", id: 2 },
    { label: "Route C", id: 3 }
  ];

  ngOnInit() {}
}
