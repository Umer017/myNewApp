import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Categories } from "./app.model";
@Injectable({
  providedIn: "root",
  
})

export class CategoriesService {
  formData: Categories = {id : 0, name : ""};
  list: Categories[] = [];
  readonly rootUrl = "https://localhost:7022/api";
  
  constructor(public http: HttpClient) {}

  postEmployee(formData: Categories) {
    return this.http.post(this.rootUrl + "/Category/", formData);
  }

  refreshList() {
    this.http
      .get<Categories[]>(this.rootUrl + "/Category/")
      .subscribe((res) => (this.list = res as Categories[]));
  }
}