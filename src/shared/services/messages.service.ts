import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as msgDataObj from '../messages.json';

@Injectable({
	providedIn: 'root'
})
export class GlobalMessageService {
	routeModule: any;
	messageObj: any;
	flattenData: any;
	currentRoute: string;
  msgData:any;
	constructor(private router: Router) {
    this.msgData = msgDataObj;
		this.getRouteUrlBaseParams();
	}
	getRouteUrlBaseParams() {
		this.routeModule = this.router.url;
		this.routeModule = this.routeModule.substr(this.routeModule.indexOf('/') + 1);
		this.routeModule = this.routeModule.split("/");
		if (this.routeModule[0].includes(';')) {
			this.routeModule = this.routeModule[0].split(";");
		}
		if (this.routeModule.length > 0) {
			// this.messageObj = this.msgData.Language[this.routeModule[0]];
      this.messageObj = this.msgData.Language.module;
		}
	}

	// Text
	getMsgText(id?:any) {
		if (id && this.currentRoute !== this.router.url) {
			this.getRouteUrlBaseParams();
			function flatten(obj:any) {
				const result:any = {};
				for (const key of Object.keys(obj)) {
					if (typeof obj[key] === 'object') {
						const nested = flatten(obj[key]);
						for (const nestedKey of Object.keys(nested)) {
							result[`${key}.${nestedKey}`] = nested[nestedKey];
						}
					} else {
						result[key] = obj[key];
					}
				}
				return result;
			}
			this.flattenData = flatten(this.messageObj);
		}
		this.currentRoute = this.router.url;
		return this.flattenData[id] ? this.flattenData[id] : 'ID Not Found';
	}
	// Obj
	getMsgObj(id?:any) {
		if (id) {
			this.getRouteUrlBaseParams();
			let obj = this.messageObj;
			let keys = id.split(".");
			for (const key of Object.keys(keys)) {
				if (keys && key)
					obj = obj[keys[key]];
			}
			return obj;
		}
	}
}
