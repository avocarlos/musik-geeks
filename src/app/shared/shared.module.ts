import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeaderComponent } from './list-header/list-header.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListHeaderComponent,
    TableComponent,
    NavbarComponent
  ],
  exports: [
    ListHeaderComponent,
    TableComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
