import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
        {
            firstName: 'Renan',
            lastName: 'Freitas',
            age: 19,
        },
        {
            firstName: 'Maria',
            lastName: 'Silva',
            age: 27
        },
        {
            firstName: 'Renata',
            lastName: 'Falcão',
            age: 27
        },
        {
            firstName: 'Breno',
            lastName: 'Feijão',
            age: 27
        },
    ]

    return of(peopleArray);
  }
}
