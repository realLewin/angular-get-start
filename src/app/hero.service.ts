import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HEROS } from './mock-heros';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeros(): Observable<Hero[]> {
    this.messageService.add('fetch data successfully.');
    return of(HEROS);
  }
  getHero(id: Number): Observable<Hero> {
    this.messageService.add(`fetch hero id: ${id}`);
    return of(HEROS.find((hero) => hero.id === id));
  }
}
