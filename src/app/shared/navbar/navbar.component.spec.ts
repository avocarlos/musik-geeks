/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navbar buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.nav-item'));

    expect(buttons.length).toEqual(5);
  });

  it('should call buttonClick fn when navbar button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.nav-link'));

    component.buttonClick.subscribe((value: string) => expect(value).toBe('albums'));

    button.triggerEventHandler('click', null);
  });

  it('should collapse navbar when collapse button is clicked', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.nav-item'));
    buttons[4].triggerEventHandler('click', null);

    expect(component.collapsed).toBe(true);
  });
});
