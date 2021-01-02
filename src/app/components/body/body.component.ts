import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder conlleva una gran responsabilidad',
        autor: 'Ben parker'
    }

    personajes:string[] = ['Spiderman', 'Venom', 'Dr octopus'];
}