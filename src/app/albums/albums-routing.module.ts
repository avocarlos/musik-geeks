import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';

const routes: Routes = [{
  path: 'albumes/:id', component: AlbumDetailsComponent
}];

export const AlbumsRoutingModule = RouterModule.forChild(routes);
