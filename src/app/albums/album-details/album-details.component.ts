import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumDetailsService } from './album-details.service';
import { ActivatedRoute } from '@angular/router';
import  '@angular/localize/init';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  public albumId?: number;
  public album?: Album;
  public cancionesTable = {
    headers: [
      '#',
      $localize`:@@ListaCancionesTítulo:Título`,
      $localize`:@@ListaCancionesDuracion:Duración`
    ],
    rows: [],
    tableContentName: 'canciones'
  };
  public breadcrumbs = ['Home', $localize`:@@AlbumsTitulo:Álbumes` ];
  public featured = [{
    title: $localize`:@@AlbumsGenero:Género`,
    subtitle: ''
  },
  {
    title: $localize`:@@AlbumsLanzamiento:Lanzamiento`,
    subtitle: ''
  },
  {
    title: $localize`:@@AlbumsFirma:Firma`,
    subtitle: ''
  }];
  constructor(
    private albumDetailsService: AlbumDetailsService,
    private route: ActivatedRoute) {

    }

  ngOnInit(): void {

    this.route.params.subscribe(params => { this.albumId = params.id; });
    this.getAlbum();
  }

  getAlbum(): void {

    this.albumDetailsService.getAlbumDetails(this.albumId).subscribe((item) => {

      this.album = item;
      if (this.album.performers) {
        this.album.performers.forEach(performer => {
          if (this.album.listaPerformers) {
            this.album.listaPerformers += ', ' + performer.name;
          }
          else {
            this.album.listaPerformers = performer.name;
          }
        });
      }
      this.breadcrumbs.push(this.album.name);


      this.featured[0].subtitle = this.album.genre;
      this.featured[1].subtitle = formatDate(this.album.releaseDate, 'longDate' , 'en-US', '+0');
      this.featured[2].subtitle = this.album.recordLabel;
      let index = 0;
      this.cancionesTable.rows = this.album.tracks.map(({ id, name, duration }) => {
        index += 1;
        return {
          columns: [index, name, duration]
        };

      });
    });
  }
}
