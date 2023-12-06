import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { NavItemComponent } from "./nav-item/nav-item.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [MainPageComponent, NavItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
