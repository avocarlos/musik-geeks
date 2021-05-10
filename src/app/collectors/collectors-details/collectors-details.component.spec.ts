/* tslint:disable:no-unused-variable */
import { TestBed,  ComponentFixture, async, inject, getTestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';
import { HttpTestingController, HttpClientTestingModule, } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CollectorsService } from '../collectors.service';
import { CollectorsDetailsComponent } from './collectors-details.component';
import { DebugElement } from '@angular/core';
import * as faker from 'faker';

const collectorId: number = faker.datatype.number();



describe('CollectorsDetailsComponent', () => {
  let component: CollectorsDetailsComponent;
  let fixture: ComponentFixture<CollectorsDetailsComponent>;
  let debug: DebugElement;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorsDetailsComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule
      ],
      providers: [CollectorsService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
    component.collectorId = collectorId;
  });

  it('should create Collectors Details component', () => {

    expect(component).toBeTruthy();
  });

  it('should call #getCollectors and format featured', () => {
    expect(component.featured).toEqual([{
      title: 'Correo Electronico',
      subtitle: ''
    },
    {
      title: 'Teléfono',
      subtitle: ''
    } ]);
  });

  it('should call #getCollector and format breadcrumbs', () => {
    expect(component.breadcrumbs).toEqual(['Home', 'Coleccionistas']);
  });
});

