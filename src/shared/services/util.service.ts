import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  public stringSubject = new Subject<string>();

  passValue(data: string) {
    this.stringSubject.next(data);
  }

}
