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
    this.heroes = this.getHeroes();
  }
  title = 'Tour of Heroes!';
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  getHeroes(): Hero[] {
    return this.heroService.getHeroes();
  }
  heroes: Hero[];
}