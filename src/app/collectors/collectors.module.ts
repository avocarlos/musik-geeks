import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectorsComponent } from './collectors.component';
import { CollectorsService } from './collectors.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollectorsComponent
  ],
  providers: [
    CollectorsService
  ],
  exports: [
    CollectorsComponent
  ]
})
export class CollectorsModule { }
