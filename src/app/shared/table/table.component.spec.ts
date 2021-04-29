import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as faker from 'faker';

import { TableComponent } from './table.component';

const HEADERS = ['Name', 'Email'];
const ROWS = [
  [faker.name.findName(), faker.internet.email()]
];

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;

    component.headers = HEADERS;
    component.rows = ROWS;

    fixture.detectChanges();
  });

  it('should render table', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with provided headers', () => {
    const table = fixture.debugElement.nativeElement;
    const headers = table.querySelectorAll('th');

    expect(headers.length).toEqual(3);
    expect(headers[0].textContent).toEqual('Name');
    expect(headers[1].textContent).toEqual('Email');
  });

  it('should render a table with provided rows', () => {
    const table = fixture.debugElement.nativeElement;
    const rows = table.querySelectorAll('tr');

    expect(rows.length).toEqual(2);
  });

  it('should render row with provided data', () => {
    const table = fixture.debugElement.nativeElement;
    const columns = table.querySelectorAll('tbody td');

    expect(columns.length).toEqual(3);
    expect(columns[0].textContent).toEqual(ROWS[0][0]);
    expect(columns[1].textContent).toEqual(ROWS[0][1]);
  });
});
