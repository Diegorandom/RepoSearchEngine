import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpModule } from "../../node_modules/@angular/http";
import { AccordionModule } from "ngx-bootstrap/accordion";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
