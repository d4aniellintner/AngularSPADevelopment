import { Injectable } from '@angular/core';

@Injectable({
	//so muss das Service nicht in "providers" in der .module.ts
	//angegeben werden
	//@see demo.modules.ts providers: [DemoService, VouchersService, FirebaseService]
	providedIn: 'root'
})
export class MusicService {
	constructor() {}
}
