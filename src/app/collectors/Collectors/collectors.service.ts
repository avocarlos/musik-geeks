import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { collector } from './collector';

@Injectable({
  providedIn: 'root'
})
export class CollectorsService {
    private apiUrl = environment.BaseURL + 'collectors';

    constructor(private http: HttpClient) { 

    }
    
    getCollectors(): Observable<collector[]> {
      return this.http.get<collector[]>(this.apiUrl);
    }

}


