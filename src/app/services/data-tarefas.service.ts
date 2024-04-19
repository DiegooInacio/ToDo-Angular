import { Injectable } from '@angular/core';

export interface Tarefas {
  situation: string;
  titleTask: string;
  descriptionTask: string;
  threeDots: string;
  date: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataTarefasService {
  public tarefas: Tarefas[] = [
    {
      situation: 'Em atraso',
      titleTask: 'Título da task',
      descriptionTask: 'Descrição da task',
      threeDots: '../../assets/threeDots.svg',
      date: '19/04/2024',
      id: 1,
    },
  ];

  constructor() {}

  public getTarefas(): Tarefas[] {
    return this.tarefas;
  }
}
