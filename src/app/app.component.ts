import { Component, inject } from '@angular/core';
import { DataTarefasService, Tarefas } from './services/data-tarefas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ToDo';

  mostrarMenu: boolean = false;

  iniciarAberto = 'backgroundColor: #e9ecef; color: #333333;';
  iconeAberto =
    'filter: brightness(0) saturate(100%) invert(14%) sepia(3%) saturate(18%) hue-rotate(321deg) brightness(99%) contrast(84%);';
  paragrafoAberto = 'color: #333';

  ativarMenu() {
    if (this.mostrarMenu == true) {
      this.mostrarMenu = false;
    } else {
      this.mostrarMenu = true;
    }
  }

  cards = [
    {
      title: 'Título da Task 1',
      description: 'Descrição da task 1',
      deadline: '4 de Fevereiro, 17:00',
    },
    {
      title: 'Título da Task 2',
      description: 'Descrição da task 2',
      deadline: '4 de Fevereiro, 17:00',
    },
  ];
}
