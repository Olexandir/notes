import { NgModule } from "@angular/core";
import { CalendarPageComponent } from "./calendar-page.component";
import { MonthComponent } from "./components/month/month.component";
import { CommonModule } from "@angular/common";
import { ColourDayDirective } from "./directives/colour-day.directive";
import { CalendarPipesModule } from "./pipes/calendar-pipes.module";

@NgModule({
  declarations: [CalendarPageComponent, MonthComponent, ColourDayDirective],
  imports: [CommonModule, CalendarPipesModule],
  exports: [CalendarPageComponent],
})
export class CalendarPageModule {}
