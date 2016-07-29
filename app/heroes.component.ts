import { Component, OnInit  } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    directives: [ HeroDetailComponent ],
    styleUrls: ['./styles.css']
})

export class HeroesComponent implements OnInit {

    //  properties
    heroes: Hero[];
    selectedHero: Hero;

    //  constructors
    constructor(private heroService: HeroService) { }

    //  functions
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero
    }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

}