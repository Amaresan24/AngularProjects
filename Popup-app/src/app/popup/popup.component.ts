import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PopupComponent implements OnInit, OnDestroy {
  @Input() isVisible = false;
  private autoCloseSubscription: Subscription | undefined;

  ngOnInit() {
    // Automatically close the popup after 3 seconds
    this.autoCloseSubscription = of(null).pipe(delay(4500)).subscribe(() => this.isVisible = false);
  }

  ngOnDestroy() {
    if (this.autoCloseSubscription) {
      this.autoCloseSubscription.unsubscribe();
    }
  }

  close() {
    this.isVisible = false;
  }
  
}