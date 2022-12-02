import { Component } from "@angular/core";

@Component({
    selector: 'modal-component',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class modalComponent {
    mostrar: boolean = false;

    mostrarModal() {
        this.mostrar = !this.mostrar;
    }
}