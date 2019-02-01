import { Observable } from 'rxjs';

export abstract class GenericRepository<T> {
  protected abstract getById(id: number): Observable<T>;
  protected abstract async getByIdAsync(id: number): Promise<T>;
  protected abstract getByAny(id: any): Observable<T>;
  protected abstract async getByAnyAsync(id: any): Promise<T>;
  protected abstract getAll(): Observable<T>;
  protected abstract async getAllAsync(): Promise<T[]>;
  protected abstract getByFilterData(filter: any): Observable<T>;
  protected abstract async getByFilterDataAsync(filter: any): Promise<T[]>;
  protected abstract getByFilter<TResult>(filter: any): Observable<TResult>;
  protected abstract async getByFilterAsync<TResult>(filter: any): Promise<TResult[]>;
  protected abstract insert(data: T): Observable<T>;
  protected abstract async insertAsync(data: T): Promise<T>;
  protected abstract update(data: T): Observable<T>;
  protected abstract async updateAsync(data: T): Promise<T>;
}
