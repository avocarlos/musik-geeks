import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicianService } from '../../musician/musician.service';
import type { Musician } from '../../musician/musician';
import type { TableRow } from '../../shared/table/table.component';
import { Collector } from '../collector';
import { CollectorsService } from '../collectors.service';
import { ToastrService } from 'ngx-toastr';
import { CollectorsAddMusicanService } from '../collectors-add-musican/collectors-add-musican.service';


interface MusiciansTable {
  headers: string[];
  rows: TableRow[];
  tableContentName: string;
}

@Component({
  selector: 'app-collectors-add-musican',
  templateUrl: './collectors-add-musican.component.html',
  styleUrls: ['./collectors-add-musican.component.scss']
})
export class CollectorsAddMusicanComponent implements OnInit {
  @Input() collectorId: number;
  @Input() collectordel: Collector;
  public collector?: Collector;

  musicians: Musician[];
  table: MusiciansTable = {
    headers: ['Músico', 'Nombre'],
    rows: [],
    tableContentName: 'musicos'
  };
  title = 'Músicos';

  public breadcrumbs = ['Home', 'Coleccionistas', 'Asociar un músico'];
  public featured = [{
        title: 'Correo Electronico',
        subtitle: ''
      },
      {
        title: 'Teléfono',
        subtitle: ''
      }];
      constructor(
        private musicianService: MusicianService,
        private route: ActivatedRoute,
        private router: Router,
        private collectorsService: CollectorsService,
        private collectorsaddMusicanService: CollectorsAddMusicanService,
        private toastr: ToastrService,
      ) { }

      ngOnInit(): void {
        this.route.params.subscribe(params => this.getCollector(params.id));
        this.getMusicians();
      }

      getMusicians(): void {
        this.musicianService.getMusicians()
          .subscribe((musicians) => {
            this.musicians = musicians;
            this.table.rows = musicians.map(({ id, image, name }) => ({
              columns: [imgTag(image), name],
              viewButtonClickadd: () =>  this.route.params.subscribe(params => this.addCollerMusican(params.id, id))
            }));
          });
      }

      getCollector(id: number): void {
        this.collectorsService.getCollector(id)
          .subscribe((collector) => {
            this.collector = collector;
            this.breadcrumbs.push(collector.name);
          });
      }

      addCollerMusican(idc: number, idm: number): void {
        this.collectorsaddMusicanService.addCollerMusican(idc, idm).subscribe(collector => {
          this.toastr.success('Músico como favorico, asociado al coleccionista, agreagdo con éxito');
          this.router.navigate([`../../coleccionistas/${idc}`], { relativeTo: this.route });
        });
      }
}


function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="Imagen de músico" />`;
}
