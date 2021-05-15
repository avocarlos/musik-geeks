import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Album } from './album';
import { AlbumsService } from './albums.service';
import { Router, ActivatedRoute } from '@angular/router';

import { TableRow } from '../shared/table/table.component';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albumes?: Album[];
  public selectedAlbum = 0;
  public title = $localize`:@@AlbumsTitulo:Titulo`;
  public headers = [
    $localize`:@@AlbumsPortada:Portada`,
    $localize`:@@AlbumsTitulo:Titulo`,
    $localize`:@@AlbumsMusico:Musico`,
    $localize`:@@AlbumsLanzamiento:Lanzamiento`
  ];
  public tableContentName = 'albumes';
  public rows: TableRow[] = [];

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router) { }

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
          const formattedDate = formatDate(releaseDate, 'shortDate', $localize`:@@DateCulture:Culture`);

          return {
            columns: [formattedImg, name, listaPerformers, formattedDate],
            viewButtonClick: () => this.router.navigate([`./${id}`], { relativeTo: this.route })
          };
        });
      });
  }

  ngOnInit(): void {
    this.getAlbumsList();
  }
}

function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="${$localize`:@@AlbumsPortada:AlbumsDescripcionPortada`}" />`;
}
