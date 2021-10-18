import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  ingresos: number = 0;
  valor: number = 0;
  constructor() { }

  ngOnInit() {
  }

  enviar(){
    this.valor = this.ingresos;
  }

}
