import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [ContatoComponent],
  exports: [ContatoComponent],
  imports: [CommonModule],
})
export class ContatoModule {}
