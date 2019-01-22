import { Component, OnChanges, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    startWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.startWidth = this.rating + 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit('Event clicked');
    }
}
