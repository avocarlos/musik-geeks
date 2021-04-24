import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import type { Musician } from './musician';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  apiUrl: string = environment.baseUrl + 'musicians';

  constructor(private http: HttpClient) { }

  getMusicians(): Observable<Musician[]> {
    return this.http.get<Musician[]>(this.apiUrl);
  }
}
