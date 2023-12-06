import { Component } from "@angular/core";
import { NavItem } from "src/app/interfaces/nav-item.interface";

@Component({
  templateUrl: "./main-page.component.html",
  styleUrls: ["main-page.component.scss"],
})
export class MainPageComponent {
  public navItems: NavItem[] = [
    {
      title: "Users",
      link: "/users",
    },
    {
      title: "Todos",
      link: "/todos",
    },
    {
      title: "Calendar",
      link: "/calendar",
    },
  ];
}
