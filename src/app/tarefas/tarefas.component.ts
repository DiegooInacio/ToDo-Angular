import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss',
})
export class TarefasComponent {
  mostrarFiltro: boolean = false;

  optionsCard: boolean = true;

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
}

// @HostListener('document:click', ['$event'])
// clickout(event: any) {
//   if (
//     !event.target.closest('.threeDots') &&
//     !event.target.closest('.boxOptionsCard')
//   ) {
//     this.optionsCard = false;
//   }
// }
