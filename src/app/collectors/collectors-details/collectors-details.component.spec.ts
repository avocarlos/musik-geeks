/* tslint:disable:no-unused-variable */
import { TestBed,  ComponentFixture, inject, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule, } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';

import { Collector } from '../collector';
import { CollectorsService } from '../collectors.service';
import { CollectorsDetailsComponent } from './collectors-details.component';


describe('CollectorsDetailsComponent', () => {
  let injector: TestBed;
  let service: CollectorsService;
  let httpMock: HttpTestingController;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.baseUrl + 'collectors';
  let fixture: ComponentFixture<CollectorsDetailsComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CollectorsService],
      declarations: [CollectorsDetailsComponent]
    }).compileComponents();

    injector = getTestBed();
    service = injector.inject(CollectorsService);
    httpMock = injector.inject(HttpTestingController);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(CollectorsDetailsComponent);

  });

  afterEach(() => {
    httpMock.verify();
    httpTestingController.verify();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
  });

  it('should render Coleccionista list data', () => {
    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');
  });

  it('Coleccionista list has image object', () => {
    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('table');
  });

  it('getCollectors() should return 10 records', inject([CollectorsService], (collectorService: CollectorsService) => {
    const mockPosts: Collector[] = [];

    service.getCollectorsList().subscribe((collectors) => {
      expect(collectors.length).toBe(0);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  }));

});

