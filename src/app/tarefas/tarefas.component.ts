import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss',
})
export class TarefasComponent {
  mostrarFiltro: boolean = true;

  ativarFiltro() {
    if (this.mostrarFiltro == true) {
      this.mostrarFiltro = false;
    } else {
      this.mostrarFiltro = true;
    }
  }
}
