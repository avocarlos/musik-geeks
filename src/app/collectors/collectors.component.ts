import { Component, OnInit } from '@angular/core';
import { Collector } from './collector';
import { CollectorsService } from './collectors.service';
import { TableRow } from '../shared/table/table.component';
interface collectorsTable {
  headers: string[];
  rows: TableRow[];
}
@Component({
  selector: 'app-collectors',
  templateUrl: './collectors.component.html',
  styleUrls: ['./collectors.component.css']
})
export class CollectorsComponent implements OnInit {
  selectedCollectors?: number;
  collectors: Collector[];
  table: collectorsTable = {
    headers: ['Nombre','Colecciones','Comentarios',''],
    rows: []
  };
  title = 'Coleccionistas';

  constructor(private collectorService: CollectorsService) { }

    ngOnInit(): void {
      this.getCollectorsList();
    }

    getCollectorsList(): void {
      this.collectorService.getCollectorsList()
        .subscribe((collectors) => {
          this.collectors = collectors;
          this.table.rows = collectors.map(({id, name,telephone,email}) => ({
            columns: [name,telephone,email],
            viewButtonClick: () => this.handleViewButtonClick(id)
          }));
        });
    }

    handleViewButtonClick(id: number): void {
      this.selectedCollectors = id;
    }
}

