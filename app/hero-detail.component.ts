import { Component, EventEmitter, Input, OnInit, OnDestroy, Output }    from '@angular/core';
import { ActivatedRoute }                                               from '@angular/router';
import { Hero }                                                         from './hero';
import { HeroService }                                                  from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: [ 'app/hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit, OnDestroy {

    // properties
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    sub: any;
    navigated = false;

    // constructor
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) { }

    // functions
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            } else {
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goBack() {
        window.history.back();
    }
}