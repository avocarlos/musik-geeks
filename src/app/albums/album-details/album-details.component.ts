import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumDetailsService } from './album-details.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  albums: Album[];
  headers: string[] = ['', 'Nombre'];
  rows: string[][] = [];
  title = 'Albums';

  constructor(private albumDetailsService: AlbumDetailsService) { }

  ngOnInit() {
  }

}
