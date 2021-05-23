import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../album';
import { AlbumCreateService } from './album-create.service';
import '@angular/localize/init';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {
  albumForm: FormGroup;
  formBuilder: FormBuilder;
  genreList: any = ['Classical', 'Salsa', 'Rock', 'Folk'];
  recordingLabelList: any = ['Sony Music', 'EMI', 'Discos Fuentes', 'Elektra', 'Fania Records'];

  public title = $localize`:@@AgregarAlbumTitulo:Agregar nuevo álbum`;
  constructor(private createAlbumService: AlbumCreateService, private route: ActivatedRoute, private toastrService: ToastrService) {

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
    });
  }

  createNewAlbum(newAlbum: Album): void {
    // Process checkout data here

    if (this.albumForm.valid) {

      this.createAlbumService.createAlbum(newAlbum).subscribe((item) => {
        this.toastrService.success('Guardado con éxito');
        this.albumForm.reset();
      });
    }

  }

  cancelCreation(): void {
    this.albumForm.reset();
  }

  changeGenre(e): void {
    this.albumForm.patchValue({ genre: this.genreList[e.target.options.selectedIndex - 1] });

  }

  changeRecordLabel(e): void {
    this.albumForm.patchValue({ recordLabel: this.recordingLabelList[e.target.options.selectedIndex - 1] });
  }


}
