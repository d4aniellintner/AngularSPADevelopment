import { Injectable } from "@angular/core";
import { Skill } from "./model/skill.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SkillService {
  constructor(private httpClient: HttpClient) {}

  getSkills() {
    return this.httpClient.get<Skill[]>("assets/skills.json");
  }
}
