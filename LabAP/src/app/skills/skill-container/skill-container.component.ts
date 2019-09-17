import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill.model';
import { SkillService } from '../skill.service';

@Component({
	selector: 'app-skill-container',
	templateUrl: './skill-container.component.html',
	styleUrls: [ './skill-container.component.scss' ]
})
export class SkillContainerComponent implements OnInit {
	constructor(private skillservice: SkillService) {}

	skills: Skill[];

	ngOnInit() {
		this.skillservice.getSkills().subscribe(data => {
			this.skills = data;
		});
	}

	selectSkill(item: Skill) {
		console.log(`You clicked ${item.name}`);
	}
}
