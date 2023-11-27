import { Injectable } from "@angular/core";
import { TodoService } from "./api/todo/todo.service";
import { Observable, forkJoin } from "rxjs";
import { ToDoDTO } from "../interfaces/todo.dto.interface";
import { UserService } from "./api/user/user.service";

@Injectable({
  providedIn: "root",
})
export class GeneralService {
  public allData: Observable<[ToDoDTO]> = new Observable();

  constructor(private todo: TodoService, private user: UserService) {}

  public getAll(): void {
    forkJoin([this.todo.getAll(), this.user.getAll()]).subscribe();
  }
}
