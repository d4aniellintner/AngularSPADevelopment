import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"]
})
export class TemplateComponent implements OnInit {
  title: string = "About Templated Component";

  constructor() {}

  ngOnInit() {}
}
