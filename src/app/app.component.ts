import { Component } from "@angular/core";
import { GeneralService } from "./services/general.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private general: GeneralService) {}

  ngOnInit() {
    this.general.getAll();
  }
}
