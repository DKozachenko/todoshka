import {animate, style, transition, trigger} from "@angular/animations";

export const MESSAGE_ANIMATION = [
  trigger('messageAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.7s', style({ opacity: 1 })),
    ]),
  ])
]
