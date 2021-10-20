import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  visibleInputs: boolean=false;
  divValor: any;
  constructor() {
  }


  ngOnInit() {
  }

  Formularioingresos = new FormGroup({
    categoria: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });
}
