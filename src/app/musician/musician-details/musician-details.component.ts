import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Musician } from '../musician';
import { MusicianService } from '../musician.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-musician-details',
  templateUrl: './musician-details.component.html',
  styleUrls: ['./musician-details.component.css']
})
export class MusicianDetailsComponent implements OnInit {
  public musician?: Musician;
  public albumsTable = {
    headers: [
      'Portada',
      'Título',
      'Lanzamiento'
    ],
    rows: [],
    tableContentName: 'albumes'
  };
  public awardsTable = {
    headers: [
      'Nombre',
      'Organización',
      'Año'
    ],
    rows: [],
    tableContentName: 'awards'
  };
  public breadcrumbs = ['Home', 'Músicos'];
  public featured = [{
    title: 'Cumpleaños',
    subtitle: ''
  }];

  constructor(
    private musicianService: MusicianService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getMusician(params.id));
  }

  getMusician(id: number): void {
    this.musicianService.getMusician(id)
      .subscribe((musician) => {
        this.musician = musician;
        this.breadcrumbs.push(musician.name);

        this.featured[0].subtitle = formatDate(musician.birthDate, 'longDate', 'en-US', '+0');
        this.albumsTable.rows = musician.albums.map(({cover, releaseDate, name}) => {
          const formattedImg = imgTag(cover);
          const formattedDate = formatDate(releaseDate, 'longDate', 'en-US', '+0');

          return {
            columns: [formattedImg, name, formattedDate]
          };
        });
      });
  }
}

function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="Portada de album" />`;
}
