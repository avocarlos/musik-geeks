import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { Collector } from '../collector';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectorsService } from '../collectors.service';
import { ToastrService } from 'ngx-toastr';
import { CollectorsAddAlbumService } from '../collectors-add-album/collectors-add-album.service';
import { Album } from '../../albums/album';
import { AlbumsService } from '../../albums/albums.service';
import { TableRow } from '../../shared/table/table.component';

@Component({
  selector: 'app-collectors-add-album',
  templateUrl: './collectors-add-album.component.html',
  styleUrls: ['./collectors-add-album.component.scss']
})
export class CollectorsAddAlbumComponent implements OnInit {
  @Input() collectorId: number;
  @Input() collectordel: Collector;
  public collector?: Collector;

  public albumes?: Album[];
  public selectedAlbum = 0;
  public title = $localize`:@@AlbumsTitulo:Álbumes`;
  public headers = [
    $localize`:@@AlbumsPortada:Portada`,
    $localize`:@@AlbumsTitulo:Álbumes`,
    $localize`:@@AlbumsMusico:Musico`,
    $localize`:@@AlbumsLanzamiento:Lanzamiento`
  ];

  public tableContentName = 'albumes';
  public rows: TableRow[] = [];

  public breadcrumbs = ['Home', 'Coleccionistas', 'Asociar un álbum'];

      constructor(
        private albumsService: AlbumsService,
        private route: ActivatedRoute,
        private router: Router,
        private collectorsService: CollectorsService,
        private collectorsaddAlbumService: CollectorsAddAlbumService,
        private toastr: ToastrService,
      ) { }

      ngOnInit(): void {
        this.route.params.subscribe(params => this.getCollector(params.id));
        this.getAlbumsList();
      }

      getCollector(id: number): void {
        this.collectorsService.getCollector(id)
          .subscribe((collector) => {
            this.collector = collector;
            this.breadcrumbs.push(collector.name);
          });
      }

      getAlbumsList(): void {
        this.albumsService.getAlbums()
          .subscribe(cs => {
            this.albumes = cs;
            if (this.albumes) {
              this.albumes.forEach((album) => {
                if (album.performers) {
                  album.performers.forEach(performer => {
                    if (album.listaPerformers) {
                      album.listaPerformers += ', ' + performer.name;
                    }
                    else {
                      album.listaPerformers = performer.name;
                    }
                  });
                }
              });
            }
            this.rows = cs.map(({ cover, name, listaPerformers, releaseDate, id }) => {
              const formattedImg = imgTag(cover);
              const formattedDate = formatDate(releaseDate, 'shortDate', 'en-US');

              return {
                columns: [formattedImg, name, listaPerformers, formattedDate],
                viewButtonClickadd: () => this.router.navigate([], { relativeTo: this.route })
              };
            });
          });
      }

      addCollerAlbum(idc: number, ida: number): void {
        this.collectorsaddAlbumService.addCollerAlbum(idc, ida).subscribe(collector => {
          this.toastr.success('Guardado con éxito');
        });
      }

      detailsCollertor(id: number): void {
        this.router.navigate([`../../coleccionistas/${id}`], { relativeTo: this.route });
      }


}


function imgTag(src: string): string {
  return `<img class="table-avatar" src="${src}" alt="${$localize`:@@AlbumsPortada:AlbumsDescripcionPortada`}" />`;
}
