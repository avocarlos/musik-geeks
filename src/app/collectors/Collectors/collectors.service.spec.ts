/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { CollectorsService } from './collectors.service';

import {
  HttpTestingController,
  HttpClientTestingModule,
 } from '@angular/common/http/testing';

describe('Service: Collectors', () => {
  let injector: TestBed;
  let service: CollectorsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CollectorsService],
    });

    injector = getTestBed();
    service = injector.inject(CollectorsService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should ...', inject([CollectorsService], (collectorsService: CollectorsService) => {
    expect(collectorsService).toBeTruthy();
  }));
});
