import { Component, OnInit, Input } from '@angular/core';
import { Collector } from '../collector';
import { CollectorsService } from '../collectors.service';

@Component({
  selector: 'app-collectors-details',
  templateUrl: './collectors-details.component.html',
  styleUrls: ['./collectors-details.component.css']
})
export class CollectorsDetailsComponent implements OnInit {
  @Input() collectorId: number;
  public collector?: Collector;
  public collectorsTable = {
    headers: [
      'Portada',
      'Título',
      'Lanzamiento'
    ],
    rows: []
  };
  public awardsTable = {
    headers: [
      'Nombre',
      'Organización',
      'Año'
    ],
    rows: []
  };
  public breadcrumbs = ['Home', 'Músicos'];
  public featured = [{
    title: 'Cumpleaños',
    subtitle: ''
  }];

  constructor(private collectorsService: CollectorsService) { }

  ngOnInit(): void {
    //this.getCollector();
  }
  /*
  getCollector(): void {
    this.collectorsService.getCollector(this.collectorId)
      .subscribe((collector) => {
        this.collector = collector;
        this.breadcrumbs.push(collector.name);

        this.collectorsTable.rows = collector.comments.map(({name}) => {
          return {
            columns: [name]
          };
        });
      });
  }*/


}
