import { formatDate } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumDetailsService } from './album-details.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() albumId: number;
  public album?: Album;
  public cancionesTable = {
    headers: [
      '#',
      'Título',
      'Duración'
    ],
    rows: []
  };

  public breadcrumbs = ['Home', 'Álbumes'];
  public featured = [{
    title: 'Genero',
    subtitle: ''
  },
  {
    title: 'Lanzamiento',
    subtitle: ''
  },
  {
    title: 'Firma',
    subtitle: ''
  }];
  constructor(private albumDetailsService: AlbumDetailsService) { }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum(): void {

    this.albumDetailsService.getAlbumDetails(this.albumId).subscribe((item) => {

      this.album = item;
      if (this.album.performers) {
        this.album.performers.forEach(performer => {
          if (this.album.listaPerformers) {
            this.album.listaPerformers += ", " + performer.name;
          }
          else {
            this.album.listaPerformers = performer.name;
          }
        });
      }
      this.breadcrumbs.push(this.album.name);


      this.featured[0].subtitle = this.album.genre;
      this.featured[1].subtitle = formatDate(this.album.releaseDate, 'longDate', 'en-US', '+0');
      this.featured[2].subtitle = this.album.recordLabel;
      let index: number = 0;
      this.cancionesTable.rows = this.album.tracks.map(({ id, name, duration }) => {
        index += 1;
        return {
          columns: [index, name, duration]
        };

      });
    });
  }
}
