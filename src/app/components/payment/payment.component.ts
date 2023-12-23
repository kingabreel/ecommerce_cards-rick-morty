import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  nomeCartao: string | undefined;
  tipoCartao: string | undefined;
  numeroCartao: string | undefined;
  cvv: number | undefined;
  dataValidade: number | undefined;
  
  formatInput(){
    if(this.numeroCartao != undefined) {
      const numeroCartao: string[] = this.numeroCartao.split('');
      const cartaoFormatado: string[] = [];

      numeroCartao.forEach(digito => {
        if(numeroCartao.indexOf(digito) % 4 === 0 && digito !== ' ') cartaoFormatado.push(' '); 

        cartaoFormatado.push(digito);
      });
      this.numeroCartao = cartaoFormatado.join('');
      this.numeroCartao = this.numeroCartao.substring(1);
    }
  }
}