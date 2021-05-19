import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectorsComponent } from './collectors.component';
import { CollectorsDetailsComponent } from './collectors-details/collectors-details.component';
import { CollectorsService } from './collectors.service';
import { SharedModule } from '../shared/shared.module';
import { CollectorRoutes } from './collector.routing';
import { CollectorsCreateComponent } from './collectors-create/collectors-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [CollectorsService],
  imports: [
    CommonModule,
    CollectorRoutes,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    CollectorsComponent,
    CollectorsDetailsComponent,
    CollectorsCreateComponent
  ],
  exports: [
    CollectorsComponent,
    CollectorsCreateComponent
  ]
})
export class CollectorsModule { }
