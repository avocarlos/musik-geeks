import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicianListComponent } from './musician/musician-list/musician-list.component';
import { CollectorsComponent } from './collectors/collectors.component';

const routes: Routes = [
  { path: 'musicos', component: MusicianListComponent },
  { path: 'coleccionistas', component: CollectorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
