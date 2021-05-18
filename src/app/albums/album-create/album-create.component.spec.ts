/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlbumCreateComponent } from './album-create.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { AlbumCreateService } from './album-create.service';

describe('AlbumCreateComponent', () => {
  let component: AlbumCreateComponent;
  let fixture: ComponentFixture<AlbumCreateComponent>;
  let httpTestingController: HttpTestingController;
  // let service: AlbumCreateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [AlbumCreateComponent]
    })
      .compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    // service = TestBed.get(AlbumCreateService);
    /* service.addCourse({ topicId: 1 })
      .subscribe(courseData => {
        expect(courseData.name).toEqual('Chessable');
      });
*/
    const req = httpTestingController.expectOne('http://localhost:8089/topics/1/courses');

    expect(req.request.method).toEqual('POST');

    // req.flush(mockCourse);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create component', () => {
    expect(component).toBeTruthy();
  });*/
});
