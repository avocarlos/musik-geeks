import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { SharedModule } from '../shared/shared.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AlbumsRoutingModule
  ],
  declarations: [
    AlbumsComponent,
    AlbumDetailsComponent
  ],
  exports: [AlbumsComponent, AlbumDetailsComponent]
})
export class AlbumsModule { }
