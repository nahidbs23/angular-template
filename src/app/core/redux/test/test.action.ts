import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
 
export const ADD_NUMBER = 'Add_Number';
export const DELETE_NUMBER = 'Remove_Number';
 
export class AddNumber implements Action {
    readonly type = ADD_NUMBER;
 
    constructor(public payload: number) { }
}
 
export class DeleteNumber implements Action {
    readonly type = DELETE_NUMBER;
 
    constructor(public index: number) { }
}
 
export type TestActions = AddNumber | DeleteNumber;