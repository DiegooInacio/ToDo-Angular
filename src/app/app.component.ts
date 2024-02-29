import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ToDo';

  mostrarMenu: boolean = true;

  ativarMenu() {
    if (this.mostrarMenu == true) {
      this.mostrarMenu = false;
    } else {
      this.mostrarMenu = true;
    }
  }
}
