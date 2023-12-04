import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  public dataSubject = new Subject<string>();
  public dataState = this.dataSubject.asObservable();

  passValue(data: string) {
    this.dataSubject.next(data);
  }

}
