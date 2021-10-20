import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  divValor: any;
  constructor() {
  }


  ngOnInit() {
  }

  mostrarValor(categoria: string,valor: number){
    this.divValor = document.getElementById("ingresos");
    this.divValor.innerText = categoria +': ' + valor;
  }

  Formularioingresos = new FormGroup({
    categoria: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });
}
