import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  visibleInputs: boolean=false;
  constructor() { }

  ngOnInit() {
  }

  Formulariogastos = new FormGroup({
    categoria: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });

}
