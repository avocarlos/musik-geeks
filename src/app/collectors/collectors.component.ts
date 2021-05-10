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
    headers: ['Nombre', 'Email', 'Teléfono', ''],
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
      this.getCollectorsList();
    }

    getCollectorsList(): void {
      this.collectorService.getCollectorsList()
        .subscribe((collectors) => {
          this.collectors = collectors;
          this.table.rows = collectors.map(({id, name, email, telephone}) => ({
            columns: [name, email, telephone],
            viewButtonClick: () => this.router.navigate([`./${id}`], { relativeTo: this.route })
          }));
        });
    }

}

