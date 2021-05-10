import { Routes, RouterModule } from '@angular/router';
import { CollectorsDetailsComponent } from './collectors-details/collectors-details.component';

const routes: Routes = [{
  path: 'collectors/:id', component: CollectorsDetailsComponent
}];

export const CollectorRoutes = RouterModule.forChild(routes);
