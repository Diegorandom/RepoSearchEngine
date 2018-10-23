import { Component } from "@angular/core";
import { RepositoriesService } from "./repositories.service";
import { FormControl, FormGroup } from "@angular/forms";
import { CommentsService } from "./comments.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [RepositoriesService, CommentsService]
})
export class AppComponent {
  search: any;
  searchForm: FormGroup;
  comments: any;
  oneAtATime: boolean = true;
  constructor(
    private repositoriesService: RepositoriesService,
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(null)
    });
  }

  onSubmit() {
    //console.log("this.searchForm -> ", this.searchForm.value.search._body.items);
    this.repositoriesService
      .getRepositories(this.searchForm.value.search)
      .subscribe(
        response => {
          console.log("repos ->", response.items),
            (this.search = response.items);
        },
        error => console.log(error)
      );
  }

  onSelectedRepo(name: string, owner: string) {
    //console.log("comment repo name -> ", name);
    this.commentsService.getComments(name, owner).subscribe(
      response => {
        this.comments = response;
      },
      error => console.log(error)
    );
  }
}
