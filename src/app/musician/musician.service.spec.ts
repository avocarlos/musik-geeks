/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MusicianService } from './musician.service';

const MUSICIANS = [
  {
    id: 1,
    name: 'Rubén Blades Bellido de Luna',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg',
    description:
      'Es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York.',
    birthDate: '1948-07-16T05:00:00.000Z',
    albums: [],
    performerPrizes: [],
  },
];

describe('Service: SingerResources', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MusicianService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#getMusicins', () => {
    it('should call the API and return musicians', inject([MusicianService], (service: MusicianService) => {
      service.getMusicians().subscribe((musicians) => {
        expect(musicians.length).toEqual(1);
        expect(musicians).toEqual(MUSICIANS);
      });

      const req = httpTestingController.expectOne(service.apiUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(MUSICIANS);
    }));
  });
});
