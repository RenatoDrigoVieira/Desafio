import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  exibir = true;
  title = "desafio";
  desempenho;
  constructor(private router: Router) {}
  ngOnInit() {}
  navigateTo(path: string) {
    if (path === "cadastro") {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
    this.router.navigate([`/${path}`]);
  }
  calcular() {
    console.log(this.desempenho);
  }
}
