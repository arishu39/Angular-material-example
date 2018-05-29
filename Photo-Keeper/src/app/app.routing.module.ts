import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsersComponent} from './components/users/users.component';
import {PhotosComponent} from './components/photos/photos.component';
import {AlbumsComponent} from './components/albums/albums.component';
import { AlbumNavigationGuard } from './guards/album-navigation.guard';
import { PhotoNavigationGuard } from './guards/photo-navigation.guard';

const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersComponent },
    { path: 'photos', component: PhotosComponent, canActivate: [PhotoNavigationGuard] },
    { path: 'albums', component: AlbumsComponent, canActivate: [AlbumNavigationGuard] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
