//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

	public myUsrID: number = 0;
	public mySurname: string = "";
	public isHK:boolean = false;
	constructor() {
		
	}
}
