import { browser, by, element, ExpectedConditions } from 'protractor';

export class AlbumDetailsPage {

  wait(): void {
    var until = ExpectedConditions;
    browser.wait(until.presenceOf(element(by.css('li.breadcrumb-item'))), 5000, 'Element taking too long to appear in the DOM');

  }

  getAlbumTitle(): Promise<string> {
    return element(by.css('.featured-title')).getText().then(function(text){ return text.toLowerCase() }) as Promise<string>;
  }

  getBreadcrumbsCount() {
    return element.all(by.css('li.breadcrumb-item')).count() as Promise<number>;
  }

  getfirstBreadcrumb() {
    return element.all(by.css('li.breadcrumb-item>strong')).first().getText() as Promise<string>;
  }

  getSecondBreadcrumb() {
    return element.all(by.css('li.breadcrumb-item>strong')).get(1).getText() as Promise<string>;
  }

  getThirdBreadcrumb() {
    return element.all(by.css('li.breadcrumb-item>strong')).get(2).getText().then(function(text){ return text.toLowerCase() }) as Promise<string>;
  }

  getAlbumCoverURL() {
    return element(by.css('.musician-img')).getAttribute('src') as Promise<string>;
  }
  getAlbumPerformers() {
    return element(by.css('.featured-subtitle')).getText() as Promise<string>;
  }
  getAlbumReleaseDate() {
    return element(by.css('#featureLanzamiento')).getText() as Promise<string>;
  }
  getAlbumGenre() {
    return element(by.css('#featureGénero')).getText() as Promise<string>;
  }
  getAlbumLabel() {
    return element(by.css('#featureFirma')).getText() as Promise<string>;
  }
  getAlbumReleaseDateTitle() {
    return element(by.css('#featureTitleLanzamiento')).getText() as Promise<string>;
  }
  getAlbumGenreTitle() {
    return element(by.css('#featureTitleGénero')).getText() as Promise<string>;
  }
  getAlbumLabelTitle() {
    return element(by.css('#featureTitleFirma')).getText() as Promise<string>;
  }
  getAlbumDescription() {
    return element(by.css('.lead')).getText() as Promise<string>;
  }
  getAddCommentsButton() {
    return element(by.css('#addCommentButton')).getText() as Promise<string>;
  }
  getaddTrackButton() {
    return element(by.css('#addTrackButton')).getText() as Promise<string>;
  }
  getCommentsTitle() {
    return element(by.css('#commentsTitle')).getText() as Promise<string>;
  }
  getTracksTitle() {
    return element(by.css('#tracksTitle')).getText() as Promise<string>;
  }

  getTracksCount() {var until = ExpectedConditions;
    browser.wait(until.presenceOf(element(by.css('.dataRowcanciones'))), 5000, 'Element taking too long to appear in the DOM');
    return element.all(by.css('.dataRowcanciones')).count() as Promise<number>;
  }

  getCommentsCount() {
    var until = ExpectedConditions;
    browser.wait(until.presenceOf(element(by.css('.card-body'))), 5000, 'Element taking too long to appear in the DOM');
    return element.all(by.css('.card-body')).count() as Promise<number>;
  }

  getCommentsTitlesCount() {
    return element.all(by.css('.card-title')).count() as Promise<number>;
  }

  getCommentsRatingsCount() {
    return element.all(by.css('.card-footer')).count() as Promise<number>;
  }



}
