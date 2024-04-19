import { TestBed } from '@angular/core/testing';

import { DataTarefasService } from './data-tarefas.service';

describe('DataTarefasService', () => {
  let service: DataTarefasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTarefasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
