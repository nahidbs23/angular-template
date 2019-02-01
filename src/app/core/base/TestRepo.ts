import { Injectable } from '@angular/core';
import { GenericRepository } from './GenericRepository';
import { ApiCommonMessage } from '../Models/ApiCommonMessage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TestRepoMapper } from './test.mapper';
import { TestEntity } from '../models/test.model';
import { flatMap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TestRepo extends GenericRepository<ApiCommonMessage> {

    mapper = new TestRepoMapper();

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    public getById(id: number): Observable<ApiCommonMessage> {
        return this.http
                .get<TestEntity[]>('https://jsonplaceholder.typicode.com/todos')
                .pipe(flatMap((item) => item))
                .pipe(map(this.mapper.mapTo));
    }
    public async getByIdAsync(id: number): Promise<ApiCommonMessage> {
        return this.http
                .get<TestEntity>('https://jsonplaceholder.typicode.com/todos/1')
                .pipe(map(this.mapper.mapTo))
                .toPromise();
    }
    public getByAny(id: any): Observable<ApiCommonMessage> {
        throw new Error('Method not implemented.');
    }
    public async getByAnyAsync(id: any): Promise<ApiCommonMessage> {
        throw new Error('Method not implemented.');
    }
    public getAll(): Observable<ApiCommonMessage> {
        throw new Error('Method not implemented.');
    }
    public async getAllAsync(): Promise<ApiCommonMessage[]> {
        throw new Error('Method not implemented.');
    }
    public getByFilterData(filter: any): Observable<ApiCommonMessage> {
        throw new Error('Method not implemented.');
    }
    public async getByFilterDataAsync(filter: any): Promise<ApiCommonMessage[]> {
        throw new Error('Method not implemented.');
    }
    public getByFilter<TResult>(filter: any): Observable<TResult> {
        throw new Error('Method not implemented.');
    }
    public async getByFilterAsync<TResult>(filter: any): Promise<TResult[]> {
        throw new Error('Method not implemented.');
    }
    public insert(data: ApiCommonMessage): Observable<ApiCommonMessage> {
        throw new Error('Method not implemented.');
    }
    public async insertAsync(data: ApiCommonMessage): Promise<ApiCommonMessage> {
        throw new Error('Method not implemented.');
    }
    public update(data: ApiCommonMessage): Observable<ApiCommonMessage> {
        throw new Error('Method not implemented.');
    }
    public async updateAsync(data: ApiCommonMessage): Promise<ApiCommonMessage> {
        throw new Error('Method not implemented.');
    }

}
