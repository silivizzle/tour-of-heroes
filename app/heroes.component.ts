import { Component, OnInit  }       from '@angular/core';
import { Router }                   from '@angular/router';
import { Hero }                     from './hero';
import { HeroDetailComponent }      from './hero-detail.component';
import { HeroService }              from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    directives: [ HeroDetailComponent ],
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {

    //  properties
    heroes: Hero[];
    selectedHero: Hero;

    //  constructors
    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

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
    goToDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}