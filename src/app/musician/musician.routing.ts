import { Routes, RouterModule } from '@angular/router';
import { MusicianDetailsComponent } from './musician-details/musician-details.component';

const routes: Routes = [{
  path: 'musicos/:id', component: MusicianDetailsComponent
}];

export const MusicianRoutes = RouterModule.forChild(routes);
