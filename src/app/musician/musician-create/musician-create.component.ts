import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musician-create',
  templateUrl: './musician-create.component.html',
  styleUrls: ['./musician-create.component.css']
})
export class MusicianCreateComponent implements OnInit {
  public title = 'Agregar nuevo músico';

  constructor() { }

  ngOnInit(): void {
  }

}
