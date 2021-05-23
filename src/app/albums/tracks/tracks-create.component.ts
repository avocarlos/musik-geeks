import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import '@angular/localize/init';
import { Track } from './tracks';
import { TracksCreateService } from './tracks-create.service';
import { AlbumDetailsService } from '../album-details/album-details.service';
import { Album } from '../album';

@Component({
  selector: 'app-tracks-create',
  templateUrl: './tracks-create.component.html',
  styleUrls: ['./tracks-create.component.css']
})
export class TracksCreateComponent implements OnInit {
  trackForm: FormGroup;
  formBuilder: FormBuilder;
  public cancionesTable = {
    headers: [
      '#',
      $localize`:@@ListaCancionesTítulo:Título`,
      $localize`:@@ListaCancionesDuracion:Duración`
    ],
    rows: [],
    tableContentName: 'canciones'
  };

  public breadcrumbs = ['Home', $localize`:@@AlbumsTitulo:Álbumes`];

  public title: string = $localize`:@@ListaCanciones:Canciones`;
  public subtitle: string = 'TBD';
  public imageSrc: string = 'TBD';

  public albumId?: number;
  constructor(private createTrackService: TracksCreateService, private getAlbumDetailsService: AlbumDetailsService, private route: ActivatedRoute, private toastrService: ToastrService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => { this.albumId = params.id; });
    this.formBuilder = new FormBuilder();
    this.trackForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      duration: ['', [Validators.required,
      Validators.pattern('^[0-5]?[0-9]:[0-5][0-9]$')]]
    })
    this.getAlbum();
    this.getTrackList();
  }

  getAlbum() {
    this.getAlbumDetailsService.getAlbumDetails(this.albumId).subscribe((album) => {
      this.breadcrumbs.push(album.name);
      this.breadcrumbs.push(this.title);
      this.subtitle = album.name;
      this.imageSrc = album.cover;
    });
  }
  getTrackList() {
    let index: number = 0;
    this.createTrackService.getTracks(this.albumId).subscribe((tracks) => {
      console.log(tracks);
      this.cancionesTable.rows = tracks.map(({ id, name, duration }) => {
        index += 1;
        return {
          columns: [index, name, duration]
        };

      });;
    });
  }

  addNewTrack(newTrack: Track): void {

    // Process checkout data here

    if (this.trackForm.valid) {

      this.createTrackService.addTrack(newTrack, this.albumId).subscribe((item) => {
        this.toastrService.success('Guardado con éxito');
        this.trackForm.reset();
        this.getTrackList();
      });
    }

  }

  cancelCreation(): void {
    this.trackForm.reset();
  }

}
