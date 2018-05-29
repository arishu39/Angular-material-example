import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/';

  public getUsers() {
    const url = this.apiUrl + 'users';
    return this.http.get(url);
  }
  public getAlbums() {
    const url = this.apiUrl + 'albums';
    return this.http.get(url);
  }
  public getPhotos() {
    const url = this.apiUrl + 'photos';
    return this.http.get(url);
  }

}
