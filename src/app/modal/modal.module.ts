import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { modalComponent } from "./modal.component";

@NgModule({
    declarations: [
        modalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        modalComponent
    ]
})

export class modalModule{}