import { Component, OnInit } from '@angular/core';
import { album } from './album';
import { AlbumsService } from './albums.service'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private albumsService: AlbumsService) { }
  public albumes: Array<album> = [];

  getAlbumsList() {
    this.albumsService.getAlbums().subscribe(cs => {
      this.albumes = cs;
    });
  }

  ngOnInit() {
    this.getAlbumsList()
  }

}
