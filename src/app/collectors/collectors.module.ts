import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectorsComponent } from './collectors.component';
import { CollectorsService } from './collectors.service';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  providers: [CollectorsService],
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CollectorsComponent
  ],
  exports: [
    CollectorsComponent
  ]
})
export class CollectorsModule { }
