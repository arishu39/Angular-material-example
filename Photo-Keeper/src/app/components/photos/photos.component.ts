import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/interval';
import * as _ from 'lodash';

import { BaseService } from '../../services/base.service';
import { SharedService } from '../../services/shared.service';
import { Photo } from './photo';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  private _photos: Photo[];
  private _displayedPhotos: Photo[] = [];
  private _sub: Subscription;
  private _counter = 1;

  constructor(private _baseService: BaseService, private _sharedService: SharedService) {
    this._photos = [];
  }
  ngOnInit() {
    this._baseService.getPhotos().subscribe(data => {
      if (data) {
        const albumIds = this._sharedService.albumIds;
        this._photos = _(data)
          .filter(x => albumIds.includes(x.albumId))
          .groupBy(x => x.albumId)
          .map((value, key) => ({ albumId: key, photos: value }))
          .value();
      }
      this._displayedPhotos = this._photos[0]['photos'];
      if (this._photos.length > 1) {
        this._sub = Observable.interval(20000)
          .subscribe((val) => {
            this._displayedPhotos = this._photos[this._counter]['photos'];
            if (this._counter === 1) {
              this._counter--;
            } else {
              this._counter++;
            }
          });
      }
    }, error => {
      console.log(error);
    });
  }
}
