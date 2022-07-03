import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of, tap} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient,) {
  }

  getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>('/api/heroes').pipe(
          tap(data => console.log('Heroes!')),
      );
  }

    getHeroById(id: number) : Observable<Hero> {
      return this.http.get<Hero>(`/api/heroes/${id}`).pipe(
          tap(data => console.log('Hero by id!')),
      );
    }

    searchHeroes(name : string) : Observable<Hero[]>{
      return this.http.get<Hero[]>(`/api/heroes/?name=${name}`).pipe(
          tap(data => console.log(name)),
      );
    }
}
