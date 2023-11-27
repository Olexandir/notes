import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full",
  },
  {
    path: "main",
    component: MainPageComponent,
    // loadChildren: () =>
    //   import("./pages/main-page/main-page.module").then(
    //     (m) => m.MainPageModule
    //   ),

    children: [
      {
        path: "users",
        loadChildren: () =>
          import("./pages/users-page/users.module").then(
            (m) => m.UsersPageModule
          ),
      },
      {
        path: "todos",
        loadChildren: () =>
          import("./pages/todos-page/todos.module").then(
            (m) => m.TodosPageModule
          ),
      },
    ],
  },
  // {
  //   path: "users",
  //   loadChildren: () =>
  //     import("./pages/users-page/users.module").then((m) => m.UsersPageModule),
  // },
  // {
  //   path: "todos",
  //   loadChildren: () =>
  //     import("./pages/todos-page/todos.module").then((m) => m.TodosPageModule),
  // },
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
