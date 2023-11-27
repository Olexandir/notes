import { BehaviorSubject, Observable } from "rxjs";

export class DataStore<T> {
  private _data$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  get data$(): Observable<T[]> {
    return this._data$.asObservable();
  }

  getData(): T[] {
    return this._data$.getValue();
  }

  setData(data: T[]): void {
    this._data$.next(data);
    console.log(data);
  }
}
