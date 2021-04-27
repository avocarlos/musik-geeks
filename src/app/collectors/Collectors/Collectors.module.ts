import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectorsComponent } from './Collectors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollectorsComponent
  ] ,
  exports: [
    CollectorsComponent
  ]
})
export class CollectorsModule { }
