import { Component, OnInit } from '@angular/core';
import { MusicianService } from '../musician.service';

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
  selectedMusician?: number;
  musicians: Musician[];
  table: MusiciansTable = {
    headers: ['', 'Nombre'],
    rows: []
  };
  title = 'Músicos';

  constructor(private musicianService: MusicianService) { }

  ngOnInit(): void {
    this.getMusicians();
  }

  getMusicians(): void {
    this.musicianService.getMusicians()
      .subscribe((musicians) => {
        this.musicians = musicians;
        this.table.rows = musicians.map(({id, image, name}) => ({
          columns: [imgTag(image), name],
          viewButtonClick: () => this.handleViewButtonClick(id)
        }));
      });
  }

  handleViewButtonClick(id: number): void {
    this.selectedMusician = id;
  }
}


function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="Imagen de músico" />`;
}
