import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums/albums.component';
import { MusicianListComponent } from './musician/musician-list/musician-list.component';

const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: 'albumes', component: AlbumsComponent },
  {
    path: 'musicos',
    component: MusicianListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
