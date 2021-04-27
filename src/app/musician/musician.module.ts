import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicianListComponent } from './musician-list/musician-list.component';
import { MusicianService } from './musician.service';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  providers: [MusicianService],
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MusicianListComponent
  ],
  exports: [MusicianListComponent]
})
export class MusicianModule { }
