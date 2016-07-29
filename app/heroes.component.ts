import { Component, OnInit  } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/heroes.component.html',
    directives: [ HeroDetailComponent ],
    providers: [ HeroService ],
    styleUrls: ['./styles.css']
})

export class HeroesComponent implements OnInit {

    //  properties
    title = 'Tour of Heroes';
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