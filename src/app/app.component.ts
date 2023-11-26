import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GetAllService } from "./services/getAll.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private getServ: GetAllService) { }

  ngOnInit() {
    this.getServ.getAllCharacters().subscribe(data => console.log(data))
  }
}
