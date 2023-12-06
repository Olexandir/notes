import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { UsersPageComponent } from "./pages/users-page/users.component";
import { TodosPageComponent } from "./pages/todos-page/todos.component";
import { CalendarPageComponent } from "./pages/calenadar-page/calendar-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full",
  },
  {
    path: "main",
    component: MainPageComponent,
    loadChildren: () =>
      import("./pages/main-page/main-page.module").then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: "users",
    component: UsersPageComponent,
    loadChildren: () =>
      import("./pages/users-page/users.module").then((m) => m.UsersPageModule),
  },
  {
    path: "todos",
    component: TodosPageComponent,
    loadChildren: () =>
      import("./pages/todos-page/todos.module").then((m) => m.TodosPageModule),
  },
  {
    path: "calendar",
    component: CalendarPageComponent,
    loadChildren: () =>
      import("./pages/calenadar-page/calendar-page.module").then(
        (m) => m.CalendarPageModule
      ),
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
