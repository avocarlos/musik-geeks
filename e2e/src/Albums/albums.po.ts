import { browser, by, element , ExpectedConditions} from 'protractor';

export class AlbumsPage {
  navigateTo(): Promise<unknown> {
    return element(by.css('a[href="/albumes"]')).click() as Promise<unknown>;
  }

  wait(): void{
    const until = ExpectedConditions;
    browser.wait(until.presenceOf(element(by.tagName('h1'))), 5000, 'Element taking too long to appear in the DOM');

  }

  getTitleText(): Promise<string> {
    const until = ExpectedConditions;
    browser.wait(until.presenceOf(element(by.tagName('h1'))), 5000, 'Element taking too long to appear in the DOM');
    return element(by.tagName('h1')).getText() as Promise<string>;
  }

  getHeaderCover(): Promise<string>{
    return element(by.css('#tableHeadersPortada')).getText() as Promise<string>;
  }

  getHeaderAlbums(): Promise<string>{
    return element(by.css('#tableHeadersÁlbumes')).getText() as Promise<string>;
  }

  getHeaderPerformers(): Promise<string>{
    return element(by.css('#tableHeadersMusico')).getText() as Promise<string>;
  }

  getHeaderReleaseDate(): Promise<string>{
    return element(by.css('#tableHeadersLanzamiento')).getText() as Promise<string>;
  }

  getRowCount(): Promise<number>{
    return element.all(by.css('.dataRowalbumes')).count() as Promise<number>;
  }

  getDetailButtonCount(): Promise<number>{
    return element.all(by.css('button[aria-label="Ver detalle"]')).count() as Promise<number>;

  }
  navagateToFirstAlbum(): Promise<unknown>{
    return element(by.css('#viewDetailsButton-0')).click() as Promise<unknown>;
  }

  getFirstAlbumCoverURL(): Promise<string>{
    return element(by.css('#table-portada0>img')).getAttribute('src') as Promise<string> ;
  }

  getFirstAlbumTitle(): Promise<string>{
    return element(by.css('#table-álbumes0')).getText().then((text) => { return text.toLowerCase(); }) as Promise<string>;
  }
  getFirstAlbumPerformers(): Promise<string>{
    return element(by.css('#table-musico0')).getText() as Promise<string>;
  }
  getFirstAlbumReleaseDate(){
    return element(by.css('#table-lanzamiento0')).getText() as Promise<string>;
  }

  getAddAlbumButton(): Promise<string>{
    return element(by.css('button[aria-label="Agregar item"]')).getText() as Promise<string>;

  }

}
