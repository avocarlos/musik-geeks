import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Collector } from '../collector';

@Injectable({
  providedIn: 'root'
})
export class CollectorsAddAlbumService {

  private apiUrl = environment.baseUrl + 'collectors';

  constructor(private http: HttpClient) { }
  addCollerAlbum(idc: number, ida: number): Observable<Collector> {
    const apiUrl = environment.baseUrl + 'collectors/' + idc + '/albums/' + ida;
    const albumadd = '';
    return this.http.post<Collector>(apiUrl, albumadd);
  }
}
