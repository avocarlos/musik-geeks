import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CollectorsService } from 'src/app/collectors/collectors.service';
import { AlbumsService } from '../../albums/albums.service';

@Component({
  selector: 'app-collectors-add-musican',
  templateUrl: './collectors-add-musican.component.html',
  styleUrls: ['./collectors-add-musican.component.scss']
})
export class CollectorsAddMusicanComponent implements OnInit {
  public title = 'Agregar comentario';
  public commentForm: FormGroup;
  public maxDescriptionLength = 500;
  public collectorOptions: Array<{ label: string, value: number }> = [];
  public albumId: number;
  public isLoading = true;

  constructor(
    private formBuilder: FormBuilder,
    private albumsService: AlbumsService,
    private collectorsService: CollectorsService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.albumId = params.id;
    });

    this.commentForm = this.formBuilder.group({
      collectorId: ['', Validators.required],
      description: [
        '',
        [Validators.required, Validators.maxLength(this.maxDescriptionLength)],
      ],
      rating: ['', Validators.required]
    });

    this.getCollectors();
  }

  get collectorId(): AbstractControl {
    return this.commentForm.get('collectorId');
  }

  get description(): AbstractControl {
    return this.commentForm.get('description');
  }

  get rating(): AbstractControl {
    return this.commentForm.get('rating');
  }

  getCollectors(): void {
    this.collectorsService.getCollectorsList().subscribe((collectors) => {
      this.isLoading = false;
      this.collectorOptions = collectors.map((collector) =>
        ({label: collector.name, value: collector.id})
      );
    });
  }

  createComment(): void {
    const payload = {
      description: this.commentForm.value.description,
      rating: this.commentForm.value.rating,
      collector: {
        id: this.commentForm.value.collectorId
      }
    };

   /* this.albumsService.createAlbumComment(this.albumId, payload).subscribe(() => {
      this.toastrService.success(
        'El comentario ha sido creado exitosamente.',
        'Comentario creado'
      );
      this.router.navigate(['albumes', this.albumId]);
    });*/
  }

  navigateBack(): void {
    this.router.navigate(['albumes', this.albumId]);
  }
}
