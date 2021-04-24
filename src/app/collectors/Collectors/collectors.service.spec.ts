/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollectorsService } from './collectors.service';

describe('Service: Collectors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectorsService]
    });
  });

  it('should ...', inject([CollectorsService], (service: CollectorsService) => {
    expect(service).toBeTruthy();
  }));
});
