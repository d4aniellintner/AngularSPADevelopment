import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill.model';

@Component({
	selector: 'app-skill-container',
	templateUrl: './skill-container.component.html',
	styleUrls: [ './skill-container.component.scss' ]
})
export class SkillContainerComponent implements OnInit {
	constructor() {}

	skills: Skill[] = [
		{ id: 1, name: 'Typeskript', hours: 10, completed: false },
		{ id: 2, name: 'Typeskrip2t', hours: 20, completed: false },
		{ id: 3, name: 'Typeskript3', hours: 30, completed: false }
	];

	ngOnInit() {}

	selectSkills(item: Skill) {
		console.log(`You clicked ${item.name}`);
	}
}
