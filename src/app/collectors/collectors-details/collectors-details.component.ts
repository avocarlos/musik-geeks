import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collector } from '../collector';
import { CollectorAlbums } from '../collector-albums/collectoralbums';
import { CollectorsService } from '../collectors.service';

@Component({
  selector: 'app-collectors-details',
  templateUrl: './collectors-details.component.html',
  styleUrls: ['./collectors-details.component.css']
})
export class CollectorsDetailsComponent implements OnInit {
  @Input() collectorId: number;
  @Input() collectordel: Collector;
  @Input() Click?: () => void;
  public collector?: Collector;
  public collectorAlbums?: CollectorAlbums;
  public albumsTable = {
    headers: [
      'Portada',
      'Título',
      'Lanzamiento',
      'Precio'
    ],
    rows: [],
    tableContentName: 'albumes'
  };

  public favoritePerformersTable = {
    headers: [
      'Músico',
      'Nombre'
    ],
    rows: [],
    tableContentName: 'musicosFavoritos'
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
    private router: Router,
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
            columns: [formattedImg, name, formattedDate, price],
            viewButtonClick: () => this.router.navigate([`../../albumes/${id}`], { relativeTo: this.route })
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
        this.favoritePerformersTable.rows = collector.favoritePerformers.map(({image, name}) => {
          return {
            columns: [imgTag(image), name],
            viewButtonClick: () => this.router.navigate([`../../musicos/${id}`], { relativeTo: this.route })
          };
        });
      });
  }
  handleViewButtonClick(id: number): void { }

  addColection(id: number): void {
    this.router.navigate([`../../agregar-coleccion-coleccionista/${id}`], { relativeTo: this.route });
  }

  addMusican(id: number): void {
    this.router.navigate([`../../agregar-musicos-coleccionista/${id}`], { relativeTo: this.route });
  }

}


function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="Portada de album" />`;
}
