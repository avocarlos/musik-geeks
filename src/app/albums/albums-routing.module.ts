import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumCreateComponent } from './album-create/album-create.component';


const routes: Routes = [{
  path: 'albumes/agregar', component: AlbumCreateComponent,
}, {
  path: 'albumes/:id', component: AlbumDetailsComponent
}];

export const AlbumsRoutingModule = RouterModule.forChild(routes);
