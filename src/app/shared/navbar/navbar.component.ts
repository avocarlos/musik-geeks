import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() current: string;
  @Output() buttonClick = new EventEmitter<string>();
  public collapsed = false;

  constructor() { }

  ngOnInit(): void {}

  onMusiciansClick(): void {
    this.buttonClick.emit('musicians');
  }

  onCollectorsClick(): void {
    this.buttonClick.emit('collectors');
  }

  onCollapseClick(): void {
    this.collapsed = !this.collapsed;
  }
}
