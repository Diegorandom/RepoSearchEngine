import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  constructor(private http: Http) {}

  getComments(name: string, owner: string) {
    return this.http
      .get(
        "https://api.github.com/repos/" +
          owner +
          "/" +
          name +
          "/issues/5/comments"
      )
      .pipe(
        map((response: Response) => {
          const comments = response.json();
          console.log("comments ->", comments);
          return comments;
        })
      );
  }
}
