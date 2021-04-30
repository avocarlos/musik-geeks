/* tslint:disable:no-unused-variable */
import { CollectorsComponent } from './collectors.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Collector } from './collector';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import * as faker from 'faker';

describe('CollectorsComponent', () => {
  let component: CollectorsComponent;
  let fixture: ComponentFixture<CollectorsComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CollectorsComponent],
    }).compileComponents();
  }));


  it('should create collectors component', () => {
    expect(component).toBeTruthy();
  });

  it('Component has collectors data table', () => {
   expect(debug.query(By.css('#albumsDataTable'))).toBeTruthy();
 });

  it('Collectors data table has data', () => {
    expect(debug.query(By.css('.albumDataRow')).childNodes.length).toBeGreaterThan(0);
  });

  it('Collectors list has name object', () => {
    expect(debug.query(By.css('.nombre'))).toBeTruthy();
  });

  it('Collectors list has performers object', () => {
    expect(debug.query(By.css('.performers'))).toBeTruthy();
  });

  it('Collectors list has release date object', () => {
    expect(debug.query(By.css('.releaseDate'))).toBeTruthy();
  });

  it('Collectors list has view details objects', () => {
    expect(debug.query(By.css('.openDetailsButton'))).toBeTruthy();
  });

  it('Title row is present', () => {
    expect(debug.query(By.css('#titleAlbums')).childNodes.length).toBeGreaterThan(0);
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div .pageTitle').textContent).toContain('Lista de Coleccionistas');
  });

});

