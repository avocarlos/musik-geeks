import { AppPage } from '../app.po';
import { AlbumsPage } from './albums.po';
import { browser, logging } from 'protractor';
import { AlbumDetailsPage } from './albums-details.po';

describe('Albums details', () => {
  let page: AppPage;
  let album: AlbumsPage;
  let albumDetails: AlbumDetailsPage;
  let coverURL: Promise<string>;
  let title: Promise<string>;
  let performers: Promise<string>;
  let releaseDate: Promise<string>;
  beforeAll(() => {
    page = new AppPage();
    album = new AlbumsPage();
    albumDetails = new AlbumDetailsPage();
  });

  it('should display breadcrumbs', () => {
    page.navigateTo();
    page.wait();
    album.navigateTo();
    album.wait();
    expect(album.getTitleText()).toEqual('Álbumes');
    coverURL = album.getFirstAlbumCoverURL();
    title = album.getFirstAlbumTitle();
    performers = album.getFirstAlbumPerformers();
    releaseDate = album.getFirstAlbumReleaseDate();
    album.navagateToFirstAlbum();
    albumDetails.wait();
    expect(albumDetails.getBreadcrumbsCount()).toEqual(3);
    expect(albumDetails.getfirstBreadcrumb()).toEqual('HOME');
    expect(albumDetails.getSecondBreadcrumb()).toEqual('ÁLBUMES');
    expect(albumDetails.getThirdBreadcrumb()).toEqual(title);
  });

  it('should display page titles', () => {
    expect(albumDetails.getAlbumReleaseDateTitle()).toEqual("LANZAMIENTO");
    expect(albumDetails.getAlbumLabelTitle()).toEqual("FIRMA");
    expect(albumDetails.getAlbumGenreTitle()).toEqual("GÉNERO");
    expect(albumDetails.getTracksTitle()).toEqual("Canciones");
    expect(albumDetails.getCommentsTitle()).toEqual("Comentarios");
  });

  it('should display album information', () => {
    expect(albumDetails.getAlbumTitle()).toEqual(title);
    expect(albumDetails.getAlbumCoverURL()).toEqual(coverURL);
    expect(albumDetails.getAlbumPerformers()).toEqual(performers);
    expect(albumDetails.getAlbumReleaseDate()).not.toEqual('');
    expect(albumDetails.getAlbumDescription()).not.toEqual('');
    expect(albumDetails.getAlbumGenre()).not.toEqual('');
    expect(albumDetails.getAlbumLabel()).not.toEqual('');
  });

  it('should display tracks', () => {
    expect(albumDetails.getTracksCount()).toBeGreaterThan(0);
  });

  it('should display comments', () => {
    let commentsCount = albumDetails.getCommentsCount();
    expect(commentsCount).toBeGreaterThan(0);
    expect(albumDetails.getCommentsTitlesCount()).toEqual(commentsCount);
    expect(albumDetails.getCommentsRatingsCount()).toEqual(commentsCount);
  });

  it('should display add buttons', () => {
    expect(albumDetails.getaddTrackButton()).toEqual('Agregar');
    expect(albumDetails.getAddCommentsButton()).toEqual('Agregar');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
