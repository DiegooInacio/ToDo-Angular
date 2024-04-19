import { Component, Input, inject } from '@angular/core';
import { DataTarefasService, Tarefas } from '../services/data-tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss',
})
export class TarefasComponent {
  private dataTarefas = inject(DataTarefasService);

  @Input() tarefas?: Tarefas;

  mostrarFiltro: boolean = false;

  optionsCard: boolean = true;

  nome = 'card';

  ativarFiltro() {
    if (this.mostrarFiltro == true) {
      this.mostrarFiltro = false;
    } else {
      this.mostrarFiltro = true;
    }
  }

  toggleOptionsCard() {
    this.optionsCard = !this.optionsCard;
  }

  getTarefas(): Tarefas[] {
    return this.dataTarefas.getTarefas();
  }
}
