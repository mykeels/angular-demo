import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  title = 'Tour of Heroes!';
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  getHeroes(): void {
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }
  heroes: Hero[];
}