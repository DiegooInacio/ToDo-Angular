import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ListasComponent } from './listas/listas.component';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './tarefas/cards/cards.component';

@NgModule({
  declarations: [AppComponent, TarefasComponent, ListasComponent, CardsComponent, ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
