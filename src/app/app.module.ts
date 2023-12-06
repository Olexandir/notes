import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainPageModule } from "./pages/main-page/main-page.module";
import { AppRoutingModule } from "./app-routing.module";
import { TodosPageModule } from "./pages/todos-page/todos.module";
import { UsersPageModule } from "./pages/users-page/users.module";
import { CalendarPageModule } from "./pages/calenadar-page/calendar-page.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainPageModule,
    TodosPageModule,
    UsersPageModule,
    CalendarPageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
