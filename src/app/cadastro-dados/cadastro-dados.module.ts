import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CadastroDadosComponent } from "./cadastro-dados.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [CadastroDadosComponent],
  exports: [CadastroDadosComponent]
})
export class CadastroDadosModule {}
