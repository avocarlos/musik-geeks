import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {album} from './album'

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = environment.BaseURL + 'albums';

  constructor(private http: HttpClient) {

  }

  getAlbums(): Observable<album[]> {
    return this.http.get<album[]>(this.apiUrl);
  }

}


