import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output() featureClicked = new EventEmitter<string>();

    onSelectStudent(){
        this.featureClicked.emit('receipe');
    }

    onSelectProfessor(){
        this.featureClicked.emit('shopping');
    }
}