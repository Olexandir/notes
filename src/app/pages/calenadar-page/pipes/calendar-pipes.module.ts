import { NgModule } from "@angular/core";
import { ChunkPipe } from "./chunk.pipe";
import { WeekDaysPipe } from "./week-days.pipe";
import { MonthNamePipe } from "./month-name.pipe";

@NgModule({
  declarations: [ChunkPipe, WeekDaysPipe, MonthNamePipe],
  exports: [ChunkPipe, WeekDaysPipe, MonthNamePipe],
})
export class CalendarPipesModule {}
