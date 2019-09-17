import { Component, OnInit } from "@angular/core";
import { Skill } from "../model/skill.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-skill-container",
  templateUrl: "./skill-container.component.html",
  styleUrls: ["./skill-container.component.scss"]
})
export class SkillContainerComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  skills: Skill[];

  ngOnInit() {
    this.httpClient.get<Skill[]>("assets/skills.json").subscribe(data => {
      this.skills = data;
    });
  }

  selectSkill(item: Skill) {
    console.log(`You clicked ${item.name}`);
  }
}
