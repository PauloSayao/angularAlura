import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  imports: [],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento={
    conteudo:'I love Angular',
    autoria: 'Nay',
    modelo:'modelo3'
  }

}
