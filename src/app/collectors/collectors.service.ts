import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Collector } from './collector';

@Injectable({
  providedIn: 'root'
})

export class CollectorsService {
  apiUrl: string = environment.baseUrl + 'collectors';

  constructor(private http: HttpClient) {

  }

  getCollectorsList(): Observable<Collector[]> {
    return this.http.get<Collector[]>(this.apiUrl);
  }

  getCollector(id: number): Observable<Collector> {
    return this.http.get<Collector>(`${this.apiUrl}/${id}`);
  }

}

