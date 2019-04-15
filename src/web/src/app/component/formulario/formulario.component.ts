import { Component, OnInit } from '@angular/core';
import { Envio } from '../../service/envio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {

  constructor(
    private envio: Envio,
  ) { }

  ngOnInit() {
  }

  enviar() {
    if (this.form.valid) {
      this.envio.create(this.form.value)
        .subscribe((response: any) => {
          if (this.result) {
            alert('Gracias!!!');
          } else {
            alerts('Error al enviar la informacion');
          }
        }, error => {
        });
    } else {
      this.markFormGroupTouched(this.form);
    }

  }

}
