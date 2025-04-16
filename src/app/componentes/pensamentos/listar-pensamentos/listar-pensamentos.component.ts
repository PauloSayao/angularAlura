import { Component } from '@angular/core';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pensamentos',
  imports: [PensamentoComponent,CommonModule],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {

listaPensamentos=[
  {
    conteudo:'Passo informações para o componente filho',
    autoria:'Componente pai',
    modelo:'modelo3'
  },
  {
    conteudo:'Minha propriedade é decorada com @Input()',
    autoria:'Componente filho',
    modelo:'modelo2'
  }
];

}
