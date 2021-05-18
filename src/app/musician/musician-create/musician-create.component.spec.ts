/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MusicianCreateComponent } from './musician-create.component';
import { SharedModule } from '../../shared/shared.module';

describe('MusicianCreateComponent', () => {
  let component: MusicianCreateComponent;
  let fixture: ComponentFixture<MusicianCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MusicianCreateComponent],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
