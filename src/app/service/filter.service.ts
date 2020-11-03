import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public spaceXList = [];
  constructor() { }
  setList(spaceXList){
    this.spaceXList = [...spaceXList];
  }

  getList() {
    return this.spaceXList;
  }
}
