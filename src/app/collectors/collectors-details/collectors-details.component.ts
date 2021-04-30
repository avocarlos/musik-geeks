import { Component, OnInit, Input } from '@angular/core';
import { Collector } from '../collector';
import { CollectorsService } from '../collectors.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-collectors-details',
  templateUrl: './collectors-details.component.html',
  styleUrls: ['./collectors-details.component.css']
})
export class CollectorsDetailsComponent implements OnInit {
  @Input() collectorId: number;
  public collector?: Collector;
  public albumsTable = {
    headers: [
      'Portada',
      'Título',
      'Lanzamiento'
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


  public breadcrumbs = ['Home', 'Coleccionista'];
  public featured = [{
        title: '   Correo Electronico    ',
        subtitle: ''
      },
      {
        title:  '',
        subtitle: ' '
      },
      {
        title: '     Teléfono    ',
        subtitle: ''
      }];


  constructor(private collectorsService: CollectorsService) { }

  ngOnInit(): void {
    this.getCollector();
  }

  getCollector(): void {
    this.collectorsService.getCollector(this.collectorId)
      .subscribe((collector) => {
        this.collector = collector;
        this.breadcrumbs.push(collector.name);

        this.featured[0].subtitle = collector.email;
        this.featured[1].subtitle = '';
        this.featured[2].subtitle = collector.telephone;

        this.albumsTable.rows = collector.collectorAlbums.map(({id, price, status}) => {
          //const formattedImg = imgTag(cover);
          //const formattedDate = formatDate(releaseDate, 'longDate', 'en-US');

          return {
            columns: [price, status, status],
            viewButtonClick: () => this.handleViewButtonClick(id)
          };
        });

        this.favoritePerformersTable.rows = collector.favoritePerformers.map(({id,image, name}) => {
          return {
            columns: [imgTag(image),name],
            viewButtonClick: () => this.handleViewButtonClick(id)
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
