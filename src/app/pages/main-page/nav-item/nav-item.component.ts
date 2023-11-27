import { Component, Input } from "@angular/core";
import { NavItem } from "src/app/interfaces/nav-item.interface";

@Component({
  selector: "nav-item",
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.scss"],
})
export class NavItemComponent {
  @Input() public navItem!: NavItem;

  constructor() {}
}
