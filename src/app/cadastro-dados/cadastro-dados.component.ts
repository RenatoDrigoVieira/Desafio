import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-cadastro-dados",
  templateUrl: "./cadastro-dados.component.html",
  styleUrls: ["./cadastro-dados.component.scss"]
})
export class CadastroDadosComponent implements OnInit {
  energiaForm = this.formBuilder.group({
    valor_produzido: [0, [Validators.required]],
    gas_natural: [0, [Validators.required]],
    indice_desempenho: [0, [Validators.required]],
    meta: [0, [Validators.required]],
    delta_y: [0, [Validators.required]],
    retorno_condensado: [0, [Validators.required]],
    temperatura_agua: [0, [Validators.required]],
    consumo_agua: [0, [Validators.required]],
    consumo_especifico_agua: [0, [Validators.required]]
  });

  gasForm = this.formBuilder.group({
    tonelada_prod: [0, [Validators.required]],
    energia_eletrica: [0, [Validators.required]],
    consumo_especifico: [0, Validators.required],
    meta: [0, [Validators.required]],
    delta_y: [0, Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  cadastroGas() {
    console.log(this.gasForm.value);
  }
  cadastroEnergia() {
    console.log(this.energiaForm.value);
  }
}
