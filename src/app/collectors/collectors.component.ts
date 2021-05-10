import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Collector } from './collector';
import { CollectorsService } from './collectors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TableRow } from '../shared/table/table.component';
interface CollectorsTable {
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
  public collapsed = false;
  collectors: Collector[] = new Array<Collector>();
  table: CollectorsTable = {
    headers: ['Nombre', 'Colecciones', 'Comentarios', ''],
    rows: []
  };
  title = 'Coleccionistas';

  @Output() Collector: Collector;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      public collectorService: CollectorsService
    ) {
    }

    ngOnInit(): void {
      this.collectorService.getCollectorsList().subscribe((collectors) => {
          this.collectors = collectors;

      });
    }

    handleViewButtonClick(id: number): void {
      this.selectedCollectors = id;
    }
    onCollapseClick(): void {
      this.collapsed = !this.collapsed;
    }
}

