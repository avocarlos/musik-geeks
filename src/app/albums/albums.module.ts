import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { SharedModule } from '../shared/shared.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AlbumsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AlbumsComponent,
    AlbumDetailsComponent,
    AlbumCreateComponent
  ],
  exports: [AlbumsComponent, AlbumDetailsComponent, AlbumCreateComponent]
})
export class AlbumsModule { }
