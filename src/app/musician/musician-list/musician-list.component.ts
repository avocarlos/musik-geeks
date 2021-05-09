import { Component, OnInit } from '@angular/core';
import { MusicianService } from '../musician.service';
import { Router, ActivatedRoute } from '@angular/router';

import type { Musician } from '../musician';
import type { TableRow } from '../../shared/table/table.component';
interface MusiciansTable {
  headers: string[];
  rows: TableRow[];
}
@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.css']
})
export class MusicianListComponent implements OnInit {
  musicians: Musician[];
  table: MusiciansTable = {
    headers: ['', 'Nombre'],
    rows: []
  };
  title = 'Músicos';

  constructor(
    private musicianService: MusicianService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMusicians();
  }

  getMusicians(): void {
    this.musicianService.getMusicians()
      .subscribe((musicians) => {
        this.musicians = musicians;
        this.table.rows = musicians.map(({id, image, name}) => ({
          columns: [imgTag(image), name],
          viewButtonClick: () => this.router.navigate([`./${id}`], { relativeTo: this.route })
        }));
      });
  }
}


function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="Imagen de músico" />`;
}
