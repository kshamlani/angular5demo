import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount : number;
  demoText : string = '';
  collections = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.collection.subscribe(res => this.collections = res);
    this.itemCount = this.collections.length;
    this._data.changeCollection(this.collections);
  }

  addItem() {
    this.collections.push(this.demoText);
    this.demoText = '';
    this.itemCount = this.collections.length;
    this._data.changeCollection(this.collections);
  }

  removeItem(i){
    this.collections.splice(i,1);
    this.itemCount = this.collections.length;
    this._data.changeCollection(this.collections);
  }

}
