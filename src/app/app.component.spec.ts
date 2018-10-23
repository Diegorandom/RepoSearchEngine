import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RepositoriesService } from "./repositories.service";
import { CommentsService } from "./comments.service";
import { isNgTemplate } from "../../node_modules/@angular/compiler";
import { ReactiveFormsModule } from "../../node_modules/@angular/forms";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("Is the form valid", () => {
    expect(app.searchForm.valid).toBeTruthy();
  });

  it(`service`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let repositoriesService = fixture.debugElement.injector.get(
      RepositoriesService
    );
    expect(RepositoriesService.getRepositories()).toBe(JSON);
  });
});
