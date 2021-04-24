import { Component, OnInit } from '@angular/core';
import { collector } from './collector';
import { CollectorsService } from './collectors.service';

@Component({
  selector: 'app-collectors',
  templateUrl: './Collectors.component.html',
  styleUrls: ['./Collectors.component.css']
})
export class CollectorsComponent implements OnInit {

  constructor(private collectorsService: CollectorsService) { }
  public collectors: Array<collector> = [];

  getCollectorsList() {
    this.collectorsService.getCollectors().subscribe(cs => {
      this.collectors = cs;
    });
  }
  ngOnInit() {
    this.getCollectorsList()
  }

}
