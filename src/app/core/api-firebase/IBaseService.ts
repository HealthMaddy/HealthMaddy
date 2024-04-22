import { Observable } from 'rxjs';

export interface IBaseService<T> {
  get(id: string): Observable<T>;
  getAll(): Promise<any>;
  watch(id: string): Observable<T>;
  list(): Observable<T[]>;
  add(item: T): Promise<T>;
  create(data: any): Promise<any>;
  update(id: string, item: T): Promise<T>;
  delete(id: string): void;
}