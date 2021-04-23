import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlbumsComponent
],
  exports: [AlbumsComponent]
})
export class AlbumsModule { }
