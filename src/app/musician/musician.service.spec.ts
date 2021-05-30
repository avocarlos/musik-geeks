/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MusicianService } from './musician.service';
import * as MusicianFixture from './fixtures';

describe('Service: MusicianService', () => {
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

  describe('#getMusicians', () => {
    it('should call the API and return musicians', inject([MusicianService], (service: MusicianService) => {
      service.getMusicians().subscribe((musicians) => {
        expect(musicians.length).toEqual(1);
        expect(musicians).toEqual(MusicianFixture.getMusiciansResponse);
      });

      const req = httpTestingController.expectOne(service.apiUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(MusicianFixture.getMusiciansResponse);
    }));
  });

  describe('#getMusician', () => {
    it('should call the API and return musician', inject([MusicianService], (service: MusicianService) => {
      service.getMusician(100).subscribe((musician) => {
        expect(musician).toEqual(MusicianFixture.getMusicianResponse);
      });

      const req = httpTestingController.expectOne(service.apiUrl + '/100');
      expect(req.request.method).toEqual('GET');

      req.flush(MusicianFixture.getMusicianResponse);
    }));
  });

  describe('#createMusician', () => {
    it('should call the API and return new musician', inject([MusicianService], (service: MusicianService) => {
      const payload = {
        name: MusicianFixture.createMusicianResponse.name,
        birthDate: MusicianFixture.createMusicianResponse.birthDate,
        description: MusicianFixture.createMusicianResponse.description,
        image: MusicianFixture.createMusicianResponse.image
      };

      service.createMusician(payload).subscribe((musician) => {
        expect(musician).toEqual(MusicianFixture.createMusicianResponse);
      });

      const req = httpTestingController.expectOne(service.apiUrl);
      expect(req.request.method).toEqual('POST');

      req.flush(MusicianFixture.createMusicianResponse);
    }));
  });

  describe('#AddMusicialToAlbum', () => {
    it('should call the API and return musician', inject([MusicianService], (service: MusicianService) => {
     /* const payload = {
        id: 9,
        name: 'Buscando América',
        cover: 'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg',
        releaseDate: '1984-08-01T05:00:00.000Z',
        description: 'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.',
        genre: 'Salsa',
        recordLabel: 'Elektra',
        performers: [
            {
                id: MusicianFixture.createMusicianResponse.id,
                name: 'Rubén Blades Bellido de Luna',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg',
                description: 'Es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York.',
                birthDate: '1948-07-16T05:00:00.000Z'
            }
        ]
    };*/

      service.addAlbumToMusician(MusicianFixture.createMusicianResponse.id,100).subscribe((musician) => {
        expect(musician).toEqual(MusicianFixture.createMusicianResponse);
      });

      const req = httpTestingController.expectOne(service.apiUrl+'/'+ MusicianFixture.createMusicianResponse.id+ '/albums/100');
      expect(req.request.method).toEqual('POST');

      req.flush(MusicianFixture.createMusicianResponse);
    }));
  });
});
