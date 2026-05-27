import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly highlights = [
    {
      value: '01',
      title: 'Abre una ronda',
      text: 'Indica cafeteria, hora de salida y telefono para coordinar el pedido.',
    },
    {
      value: '02',
      title: 'Recoge pedidos',
      text: 'Tus companeros se unen con cafes, desayunos o menus sin perder el hilo.',
    },
    {
      value: '03',
      title: 'Cierra pagos',
      text: 'Cada pedido queda claro y listo para resolver el Bizum sin calculos raros.',
    },
  ];
}
