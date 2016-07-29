import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HeroesComponent],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
