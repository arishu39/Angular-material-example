import { Component, OnInit } from '@angular/core';

import { BaseService } from '../../services/base.service';
import { SharedService } from '../../services/shared.service';
import { Album } from './album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  private _albums: Album[];
  private _counter = 0;

  constructor(private _baseService: BaseService, private _sharedService: SharedService) {
    this._albums = [];
  }

  ngOnInit() {
    this._baseService.getAlbums().subscribe(data => {
      if (data) {
        this._sharedService.albumIds = [];
        const userId = this._sharedService.userId;
        this._albums = (<Album[]>data).filter(x => x.userId === userId);
      }
    },
      error => {
        console.log(error);
      });
  }
  selectAlbum(event, albumId: number) {
    if (!event.target.checked) {
      this._sharedService.albumIds.splice(this._sharedService.albumIds.indexOf(albumId), 1);
      this._counter--;
    }
    if (this._counter === 2 && event.target.checked) {
      event.target.checked = false;
      alert('Cannot select more than 2 albums');
    }
    if (event.target.checked && this._counter < 2) {
      this._counter++;
      this._sharedService.albumIds.push(albumId);
    }
  }
}
