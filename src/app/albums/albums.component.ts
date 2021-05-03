import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Album } from './album';
import { AlbumsService } from './albums.service';

import { TableRow } from '../shared/table/table.component';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albumes: Album[] = [];
  public selectedAlbum = 0;
  public title = 'Álbumes';
  public headers = [
    'Portada',
    'Título',
    'Músico',
    'Lanzamiento'
  ];
  public rows: TableRow[] = [];

  constructor(private albumsService: AlbumsService) { }

  getAlbumsList(): void {
    this.albumsService.getAlbums()
      .subscribe(cs => {
        this.albumes = cs;
        if (this.albumes) {
          this.albumes.forEach((album) => {
            if (album.performers) {
              album.performers.forEach(performer => {
                if (album.listaPerformers) {
                  album.listaPerformers += ', ' + performer.name;
                }
                else {
                  album.listaPerformers = performer.name;
                }
              });
            }
          });
        }
        this.rows = cs.map(({ cover, name, listaPerformers, releaseDate, id }) => {
          const formattedImg = imgTag(cover);
          const formattedDate = formatDate(releaseDate, 'shortDate', 'en-US');

          return {
            columns: [formattedImg, name, listaPerformers, formattedDate],
            viewButtonClick: () => this.handleViewButtonClick(id)
          };
        });
      });
  }

  handleViewButtonClick(id: number): void {
    this.selectedAlbum = id;
  }

  ngOnInit(): void {
    this.getAlbumsList();
  }
}

function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="Portada de album" />`;
}
