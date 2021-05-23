/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollectorsAddAlbumService } from './collectors-add-album.service';

describe('Service: CollectorsAddAlbum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectorsAddAlbumService]
    });
  });

  it('should ...', inject([CollectorsAddAlbumService], (service: CollectorsAddAlbumService) => {
    expect(service).toBeTruthy();
  }));
});
