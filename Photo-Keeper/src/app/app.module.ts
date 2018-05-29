import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';

import {SharedModule} from './shared/shared.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { BaseService } from './services/base.service';
import { SharedService } from './services/shared.service';
import { PhotoNavigationGuard } from './guards/photo-navigation.guard';
import { AlbumNavigationGuard } from './guards/album-navigation.guard';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [BaseService, SharedService, PhotoNavigationGuard, AlbumNavigationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
