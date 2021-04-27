import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Musik Geeks';
  current = 'albums';

  onNavbarClick(value: string): void {
    this.current = value;
  }
}
