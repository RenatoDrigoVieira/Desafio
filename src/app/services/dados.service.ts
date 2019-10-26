import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DadosService {
  constructor(private httpService: HttpClient) {}

  getDados() {
    return this.httpService.get("http://localhost:5000/energy");
  }
}
