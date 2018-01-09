import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private collections = new BehaviorSubject<any>(['The initial collection', 'Another silly life collection']);
  collection = this.collections.asObservable();

  constructor() { }

  changeCollection(collection) {
    this.collections.next(collection)
  }

}