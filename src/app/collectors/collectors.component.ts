import { Component, OnInit } from '@angular/core';
import { Collector } from './collector';
import { CollectorsService } from './collectors.service';

@Component({
  selector: 'app-collectors',
  templateUrl: './collectors.component.html',
  styleUrls: ['./collectors.component.css']
})
export class CollectorsComponent implements OnInit {
  public collectors: Collector[] = [];
  public title = ' Coleccionistas ';
  public headers = [
    'Nombre',
    'Telefono',
    'Email'
  ];
  public rows: string[][] = [];

  constructor(private collectorService: CollectorsService) { }

  getCollectorsList(): void {
    this.collectorService.getCollectors().subscribe(cs => {
      this.collectors = cs;
      cs[0].comments.length;
      this.rows =
      cs.map(({name, telephone, email}) => {
        return [
          name,
          telephone,
          email
        ];
      });
    });

  }

  ngOnInit(): void {
    this.getCollectorsList();
  }
}
