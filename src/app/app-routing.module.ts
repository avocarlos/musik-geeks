import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums/albums.component';
import { MusicianListComponent } from './musician/musician-list/musician-list.component';
import { CollectorsComponent } from './collectors/collectors.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './shared/error-handling/http-error-interceptor.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'albumes', component: AlbumsComponent },
  { path: 'musicos', component: MusicianListComponent },
  { path: 'coleccionistas', component: CollectorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ToastrModule.forRoot(), BrowserAnimationsModule,
    BrowserModule, HttpClientModule,],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
