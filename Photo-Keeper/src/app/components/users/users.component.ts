import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseService } from '../../services/base.service';
import { SharedService } from '../../services/shared.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private _router: Router, private _baseService: BaseService, private _sharedService: SharedService) { }
  private users: User[];

  ngOnInit() {
    this._baseService.getUsers().subscribe(data => {
      this.users = <User[]>data;
    },
      error => {
        console.log(error);
      });
  }
  showAlbums(userId: number) {
    this._sharedService.userId = userId;
    this._router.navigate(['/albums']);
  }

}
