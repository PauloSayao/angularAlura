import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  imports: [FormsModule],
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css'
})
export class CriarPensamentosComponent {
pensamento = {
  id:'1',
  conteudo: 'Aprendendo Angular',
  autoria: 'Dev',
  modelo:'modelo1'
}
criarPensamento(){
  alert('novo pensamento criado')
}
cancelar(){
  alert('ação foi cancelada')
}
}
