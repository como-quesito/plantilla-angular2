import {bootstrap, Component, NgFor, View} from 'angular2/angular2';
import {HTTP_BINDINGS, Http} from 'angular2/http';

@Component({
    selector: 'app3',
    bindings: [HTTP_BINDINGS]
})
@View({
    templateUrl: 'estacion.html',
    directives: [NgFor]
})
export class App {
    temperaturas: Object[];
    constructor(http:Http) {
        http.get('http://campitos.elasticbeanstalk.com/estacion/temperatura')
            .map(res=>res.json())
            .subscribe(temperaturas=>this.temperaturas=temperaturas);
    }

}

bootstrap(App)
    .catch(err => console.error(err));
