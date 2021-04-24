import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Collector } from './collector';

@Injectable({
  providedIn: 'root'
})
export class CollectorsService {
    private apiUrl = environment.baseUrl + 'collectors';

    constructor(private http: HttpClient) {

    }

    getCollectors(): Observable<Collector[]> {
      return this.http.get<Collector[]>(this.apiUrl);
    }

}


