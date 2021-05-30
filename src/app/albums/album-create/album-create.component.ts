import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../album';
import { AlbumCreateService } from './album-create.service';
import { MusicianService } from '../../musician/musician.service';
import '@angular/localize/init';
import { Musician } from '../../musician/musician';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {
  albumForm: FormGroup;
  formBuilder: FormBuilder;
  musicianList: {};
  selectedMusician: Musician;
  genreList: any = ['Classical', 'Salsa', 'Rock', 'Folk'];
  recordingLabelList: any = ['Sony Music', 'EMI', 'Discos Fuentes', 'Elektra', 'Fania Records'];

  public title = $localize`:@@AgregarAlbumTitulo:Agregar nuevo álbum`;
  constructor(private createAlbumService: AlbumCreateService,
              private musicianService: MusicianService,
              private route: ActivatedRoute,
              private toastrService: ToastrService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.formBuilder = new FormBuilder();
    this.albumForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      cover: ['', [Validators.required,
      Validators.pattern('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]],
      releaseDate: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      genre: ['', Validators.required],
      recordLabel: ['', [Validators.required, Validators.maxLength(100)]],
      performerId: ['', Validators.required]
    });
    this.getMusiciansList();
  }

  get performerId(): AbstractControl {
    return this.albumForm.get('performerId');
  }

  get name(): AbstractControl {
    return this.albumForm.get('name');
  }

  get cover(): AbstractControl {
    return this.albumForm.get('cover');
  }

  get releaseDate(): AbstractControl {
    return this.albumForm.get('releaseDate');
  }

  get description(): AbstractControl {
    return this.albumForm.get('description');
  }

  get genre(): AbstractControl {
    return this.albumForm.get('genre');
  }

  get recordLabel(): AbstractControl {
    return this.albumForm.get('recordLabel');
  }

  createNewAlbum(newAlbum): void {
    // Process checkout data here

    if (this.albumForm.valid) {
      console.log(newAlbum.performerId);
      const album = new Album(newAlbum.name,
                              newAlbum.cover,
                              newAlbum.releaseDate,
                              newAlbum.description,
                              newAlbum.genre,
                              newAlbum.recordLabel
      );
      this.createAlbumService.createAlbum(album).subscribe((item) => {
        this.musicianService.addAlbumToMusician(this.selectedMusician.id, item.id).subscribe((result) => {
          this.toastrService.success('Guardado con éxito');
          this.router.navigate(['albumes']);
        });
      });

    }

  }

  getMusiciansList(): void {
    this.musicianService.getMusicians().subscribe((list) => {
      this.musicianList = list;
    });
  }

  cancelCreation(): void {
    this.router.navigate(['albumes']);
  }

  cleanFields(): void {
    this.albumForm.reset();
    this.albumForm.reset({ genre: '', recordLabel: '' });
  }

  changeGenre(e): void {
    this.albumForm.patchValue({ genre: this.genreList[e.target.options.selectedIndex - 1] });

  }
  changeMusician(e): void {
    this.selectedMusician = this.musicianList[e.target.options.selectedIndex - 1];
    this.albumForm.patchValue({ performerId: this.musicianList[e.target.options.selectedIndex - 1].id });

  }

  changeRecordLabel(e): void {
    this.albumForm.patchValue({ recordLabel: this.recordingLabelList[e.target.options.selectedIndex - 1] });
  }


}
