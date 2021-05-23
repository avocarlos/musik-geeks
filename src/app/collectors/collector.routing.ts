import { Routes, RouterModule } from '@angular/router';
import { CollectorsDetailsComponent } from './collectors-details/collectors-details.component';
import { CollectorsCreateComponent } from './collectors-create/collectors-create.component';
import { CollectorsAddMusicanComponent } from './collectors-add-musican/collectors-add-musican.component';

const routes: Routes = [
  {
    path: 'coleccionistas/agregar', component: CollectorsCreateComponent,
  },
  {
    path: 'coleccionistas/:id', component: CollectorsDetailsComponent
  }
  ,
  {
    path: 'agregar-musicos-coleccionista/:id', component: CollectorsAddMusicanComponent
  },
  {
    path: 'agregar-coleccion-coleccionista/:id', component: CollectorsAddMusicanComponent
  }



];

export const CollectorRoutes = RouterModule.forChild(routes);
