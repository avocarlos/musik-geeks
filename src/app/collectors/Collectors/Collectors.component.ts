import { Component, OnInit } from '@angular/core';
import { Collector } from './collector';
import { CollectorsService } from './collectors.service';

@Component({
  selector: 'app-collectors',
  templateUrl: './Collectors.component.html',
  styleUrls: ['./Collectors.component.css']
})
export class CollectorsComponent implements OnInit {

  constructor(private collectorsService: CollectorsService) { }
  public collectors: Array<Collector> = [];

  getCollectorsList(): void {
    this.collectorsService.getCollectors().subscribe(cs => {
      this.collectors = cs;
    });
  }
  ngOnInit(): void {
    this.getCollectorsList();
  }

}
