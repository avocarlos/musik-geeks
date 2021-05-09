import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicianListComponent } from './musician/musician-list/musician-list.component';

const routes: Routes = [{
  path: 'musicos',
  component: MusicianListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
