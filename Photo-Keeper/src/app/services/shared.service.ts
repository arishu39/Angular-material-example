import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
public userId: number;
public albumIds: Array<number>;
  constructor() {
    this.userId = 0;
    this.albumIds = [];
  }

}
