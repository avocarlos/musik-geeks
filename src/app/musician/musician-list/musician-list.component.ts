import { Component, OnInit } from '@angular/core';
import { MusicianService } from '../musician.service';

import type { Musician } from '../musician';

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.css']
})
export class MusicianListComponent implements OnInit {
  musicians: Musician[];
  headers: string[] = ['', 'Nombre'];
  rows: string[][] = [];
  title = 'Músicos';

  constructor(private musicianService: MusicianService) { }

  ngOnInit(): void {
    this.getMusicians();
  }

  getMusicians(): void {
    this.musicianService.getMusicians()
      .subscribe((musicians) => {
        this.musicians = musicians;
        this.rows = musicians.map(({image, name}) => [imgTag(image), name]);
      });
  }
}

function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="Imagen de músico" />`;
}
