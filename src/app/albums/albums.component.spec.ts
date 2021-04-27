import { AlbumsComponent } from "./albums.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import * as faker from "faker";
import { album } from "./album";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("AlbumsComponent", () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AlbumsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    component.albumes = [
      new album(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.recent(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("should create albums component", () => {
    expect(component).toBeTruthy();
  });

  it("Component has albums data table", () => {
   expect(debug.query(By.css("#albumsDataTable"))).toBeTruthy();
 });

  it("Albums data table has data", () => {
    expect(debug.query(By.css(".albumDataRow")).childNodes.length).toBeGreaterThan(0);
  });

  it("Album list has image object", () => {
    expect(debug.query(By.css(".smallCover"))).toBeTruthy();
  });

  it("Album list has name object", () => {
    expect(debug.query(By.css(".nombre"))).toBeTruthy();
  });

  it("Album list has performers object", () => {
    expect(debug.query(By.css(".performers"))).toBeTruthy();
  });

  it("Album list has release date object", () => {
    expect(debug.query(By.css(".releaseDate"))).toBeTruthy();
  });

  it("Album list has view details objects", () => {
    expect(debug.query(By.css(".openDetailsButton"))).toBeTruthy();
  });

  it("Title row is present", () => {
    expect(debug.query(By.css("#titleAlbums")).childNodes.length).toBeGreaterThan(0);
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div .pageTitle').textContent).toContain('Lista de Álbumes');
  });

});
