import {bootstrap, Component, NgFor, View} from 'angular2/angular2';
import {HTTP_BINDINGS, Http} from 'angular2/http';

@Component({
    selector: 'app2',
    bindings: [HTTP_BINDINGS]
})
@View({
    templateUrl: 'gente.html',
    directives: [NgFor]
})
export class App {
    people: Object[];
    constructor(http:Http) {
        http.get('http://127.0.0.1:49787/src/people.json').map(res=>res.json()).subscribe(people=>this.people=people);
    }

}

bootstrap(App)
    .catch(err => console.error(err));
