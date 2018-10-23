import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RepositoriesService {
  constructor(private http: Http) {}

  getRepositories(search: string) {
    return this.http
      .get("https://api.github.com/search/repositories?q=" + search)
      .pipe(
        map((response: Response) => {
          const data = response.json();
          console.log("data ->", data);
          return data;
        })
      );
  }
}
