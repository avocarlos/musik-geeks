/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { AlbumsService } from './albums.service';
import {album} from './album'

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";

import { environment } from "../../environments/environment";

describe('Service: GetAlbums', () => {
  let injector: TestBed;
  let service: AlbumsService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.BaseURL + "albums";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumsService],
    });

    injector = getTestBed();
    service = injector.get(AlbumsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create service...', inject([AlbumsService], (service: AlbumsService) => {
    expect(service).toBeTruthy();
  }));

  it("getAlbums() should return 10 records", () => {
    let mockPosts: album[] = [];

    for (let i = 0; i < 10; i++) {
      let nuevoAlbum = new album(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.recent(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number()
      );
      mockPosts.push(nuevoAlbum);
    }

    service.getAlbums().subscribe((albums) => {
      expect(albums.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });
});
