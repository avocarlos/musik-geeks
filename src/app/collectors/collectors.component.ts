import { Component, OnInit } from '@angular/core';
import { Collector } from './collector';
import { CollectorsService } from './collectors.service';

@Component({
  selector: 'app-collectors',
  templateUrl: './collectors.component.html',
  styleUrls: ['./collectors.component.css']
})
export class CollectorsComponent implements OnInit {

  constructor(private collectorService: CollectorsService) { }
  public collectors: Array<Collector> = [];

  getCollectorsList(): void {
    this.collectorService.getCollectors().subscribe(cs => {
      this.collectors = cs;
    });
  }

  ngOnInit(): void {
    this.getCollectorsList();
  }
}
