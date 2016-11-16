import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes!';
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  heroes: Hero[] = [
    {
      id: 11, name: 'Mr. Nice'
    },
    {
      id: 12, name: 'Mr. Wong'
    },
    {
      id: 13, name: 'Mr. Song'
    },
    {
      id: 14, name: 'Ms. Beets'
    },
    {
      id: 15, name: 'Mr. Sharknado'
    }
  ];
}