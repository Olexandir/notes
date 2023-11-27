import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { MainPageRoutingModule } from "./main-page-routing.module";
import { NavItemComponent } from "./nav-item/nav-item.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [MainPageComponent, NavItemComponent],
  imports: [MainPageRoutingModule, CommonModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
