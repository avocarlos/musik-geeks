import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './Albums.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlbumsComponent
],
  exports: [AlbumsComponent]
})
export class AlbumsModule { }
