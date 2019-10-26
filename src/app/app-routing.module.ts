import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GraficoComponent } from "./grafico/grafico.component";
import { CadastroDadosComponent } from "./cadastro-dados/cadastro-dados.component";

const routes: Routes = [
  { path: "", component: GraficoComponent },
  { path: "cadastro", component: CadastroDadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
