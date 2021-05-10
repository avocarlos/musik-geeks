import { Component, OnInit, Input } from '@angular/core';
import { Collector } from '../collector';
import { CollectorsService } from '../collectors.service';
import { formatDate } from '@angular/common';
import { CollectorAlbums } from '../collector-albums/collectoralbums';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collectors-details',
  templateUrl: './collectors-details.component.html',
  styleUrls: ['./collectors-details.component.css']
})
export class CollectorsDetailsComponent implements OnInit {
  @Input() collectorId: number;
  @Input() collectordel: Collector;
  public collector?: Collector;
  public collectorAlbums?: CollectorAlbums;
  public collapsed = false;
  public albumsTable = {
    headers: [
      '',
      'Título',
      'Lanzamiento',
      'Precio'
    ],
    rows: []
  };

  public favoritePerformersTable = {
    headers: [
      '',
      'Nombre'
    ],
    rows: []
  };

  public commentsTable = {
    headers: [
      ' '
    ],
    rows: []
  };

  public breadcrumbs = ['Home', 'Coleccionistas'];
  public featured = [{
        title: 'Correo Electronico',
        subtitle: ''
      },
      {
        title: 'Teléfono',
        subtitle: ''
      }];



  constructor(
    private route: ActivatedRoute,
    private collectorsService: CollectorsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getCollector(params.id));
    this.route.params.subscribe(params => this.getCollectorAlbums(params.id));
    }

  getCollectorAlbums(id: number): void {
    this.collectorsService.getCollectorAlbums(id)
      .subscribe((collectorAlbums) => {
        this.collectorAlbums = collectorAlbums[0].album;
        const price = collectorAlbums[0].price;
        const peliculas = [collectorAlbums[0].album];
        this.albumsTable.rows = peliculas.map(({cover, name, releaseDate}) => {
          const formattedImg = imgTag(cover);
          const formattedDate = formatDate(releaseDate, 'longDate', 'en-US', '+0');
          return {
            columns: [formattedImg, name, formattedDate, price]
          };
        });
    });
  }

  getCollector(id: number): void {
    this.collectorsService.getCollector(id)
      .subscribe((collector) => {
        this.collector = collector;
        this.breadcrumbs.push(collector.name);

        this.featured[0].subtitle = collector.email;
        this.featured[1].subtitle = collector.telephone;
        this.favoritePerformersTable.rows = collector.favoritePerformers.map(({id, image, name}) => {
          return {
            columns: [imgTag(image), name]
          };
        });

        this.commentsTable.rows = collector.comments.map(({description, rating}) => {
          return {
            columns: [description, rating]
          };
        });

      });
  }
  handleViewButtonClick(id: number): void { }

}
function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="Portada de album" />`;
}
