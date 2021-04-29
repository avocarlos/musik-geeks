import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Album } from './album';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albumes: Album[] = [];
  public title = 'Álbumes';
  public headers = [
    'Portada',
    'Título',
    'Músico',
    'Lanzamiento'
  ];
  public rows: string[][] = [];

  constructor(private albumsService: AlbumsService) { }

  getAlbumsList(): void {
    this.albumsService.getAlbums().subscribe(cs => {
      this.albumes = cs;
      this.rows = cs.map(({cover, name, recordLabel, releaseDate}) => {
        const formattedImg = imgTag(cover);
        const formattedDate = formatDate(releaseDate, 'shortDate', 'en-US');

        return [
          formattedImg,
          name,
          recordLabel,
          formattedDate
        ];
      });
    });
  }

  ngOnInit(): void {
    this.getAlbumsList();
  }
}

function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="Portada de album" />`;
}
