import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums/albums.component';
import { MusicianListComponent } from './musician/musician-list/musician-list.component';
import { CollectorsComponent } from './collectors/collectors.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'albumes', component: AlbumsComponent },
  { path: 'musicos', component: MusicianListComponent },
  { path: 'coleccionistas', component: CollectorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
