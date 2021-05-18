/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { AlbumCreateService } from './album-create.service';
import { Album } from '../album';
import { ToastrService } from 'ngx-toastr';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import * as faker from 'faker';

import { environment } from '../../../environments/environment';

describe('Service: AlbumCreate', () => {
  let injector: TestBed;
  let service: AlbumCreateService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + 'albums';

  beforeEach(() => {
   TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrService],
      providers: [AlbumCreateService]
    });
    injector = getTestBed();
    service = injector.inject(AlbumCreateService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  /*it('should ...', inject([AlbumCreateService], (service: AlbumCreateService) => {
    expect(service).toBeTruthy();
  }));*/
});
