import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { NavItemComponent } from "./nav-item/nav-item.component";
import { CommonModule } from "@angular/common";
import { TodosPageModule } from "../todos-page/todos.module";
import { UsersPageModule } from "../users-page/users.module";

@NgModule({
  declarations: [MainPageComponent, NavItemComponent],
  imports: [CommonModule, TodosPageModule, UsersPageModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
