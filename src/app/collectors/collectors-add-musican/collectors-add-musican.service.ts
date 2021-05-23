import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Collector } from '../collector';
import { Musician } from '../../musician/musician';


@Injectable({
  providedIn: 'root'
})
export class CollectorsAddMusicanService {

  constructor(private http: HttpClient) { }
  addCollerMusican(idc: number, idm: number): Observable<Collector> {
    const apiUrl = environment.baseUrl + 'collectors/' + idc + '/musicians/' + idm;
    const musiadd = '';
    return this.http.post<Collector>(apiUrl, musiadd);
  }
}
