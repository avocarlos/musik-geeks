import { browser, by, element , ExpectedConditions} from 'protractor';

export class AlbumsPage {
  navigateTo(): Promise<unknown> {
    //return browser.get(browser.baseUrl + 'albumes') as Promise<unknown>;
    return element(by.css('a[href="/albumes"]')).click() as Promise<unknown>;
  }

  wait(): void{
    var until = ExpectedConditions;
    browser.wait(until.presenceOf(element(by.tagName('h1'))), 5000, 'Element taking too long to appear in the DOM');

  }

  getTitleText(): Promise<string> {
    var until = ExpectedConditions;
    browser.wait(until.presenceOf(element(by.tagName('h1'))), 5000, 'Element taking too long to appear in the DOM');
    return element(by.tagName('h1')).getText() as Promise<string>;
  }

  getHeaderCover(){
    return element(by.css('#tableHeadersPortada')).getText() as Promise<string>;
  }

  getHeaderAlbums(){
    return element(by.css('#tableHeadersÁlbumes')).getText() as Promise<string>;
  }

  getHeaderPerformers(){
    return element(by.css('#tableHeadersMusico')).getText() as Promise<string>;
  }

  getHeaderReleaseDate(){
    return element(by.css('#tableHeadersLanzamiento')).getText() as Promise<string>;
  }

  getRowCount(){
    return element.all(by.css('.dataRowalbumes')).count() as Promise<number>;
  }

  getDetailButtonCount(){
    return element.all(by.css('button[aria-label="Ver detalle"]')).count() as Promise<number>;

  }
  navagateToFirstAlbum(){
    return element(by.css('#viewDetailsButton-0')).click() as Promise<unknown>;
  }

  getFirstAlbumCoverURL(){
    return element(by.css('#table-portada0>img')).getAttribute('src') as Promise<string> ;
  }

  getFirstAlbumTitle(){
    return element(by.css('#table-álbumes0')).getText().then(function(text){ return text.toLowerCase() }) as Promise<string>;
  }
  getFirstAlbumPerformers(){
    return element(by.css('#table-musico0')).getText() as Promise<string>;
  }
  getFirstAlbumReleaseDate(){
    return element(by.css('#table-lanzamiento0')).getText() as Promise<string>;
  }

  getAddAlbumButton(){
    return element(by.css('button[aria-label="Agregar item"]')).getText() as Promise<string>;

  }

}
