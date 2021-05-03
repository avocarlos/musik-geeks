import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { SharedModule } from '../shared/shared.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AlbumsComponent,
    AlbumDetailsComponent
  ],
  exports: [AlbumsComponent, AlbumDetailsComponent]
})
export class AlbumsModule { }
