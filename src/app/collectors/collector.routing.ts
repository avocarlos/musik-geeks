import { Routes, RouterModule } from '@angular/router';
import { CollectorsDetailsComponent } from './collectors-details/collectors-details.component';
import { CollectorsCreateComponent } from './collectors-create/collectors-create.component';

const routes: Routes = [{
  path: 'coleccionistas/agregar', component: CollectorsCreateComponent,
}, {
  path: 'coleccionistas/:id', component: CollectorsDetailsComponent
}];

export const CollectorRoutes = RouterModule.forChild(routes);
