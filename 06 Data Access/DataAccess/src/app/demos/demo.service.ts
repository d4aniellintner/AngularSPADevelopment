import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoItem } from './demo-item.model';

@Injectable()
export class DemoService {
	constructor(private httpClient: HttpClient) {}

<<<<<<< HEAD
	getItems(): Observable<DemoItem[]> {
		return this.httpClient.get<DemoItem[]>('/assets/demos.json');
	}
=======
  getItems(): Observable<DemoItem[]> {
    return this.httpClient.get<DemoItem[]>('/assets/demos.json');
  }
>>>>>>> d461ad3d62053e1e339b99d6eecd6f5f48a0d668
}
