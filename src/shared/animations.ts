import {
  transition,
  trigger,
  query,
  style,
  animate,
  animateChild,
  stagger,
  keyframes,
  state
} from '@angular/animations';

export const AnimationDefinitions = [
  trigger('list', [
    transition(':enter', [
      query('@slideUp', stagger(100, animateChild()), { optional: true }),
      query('@slideLeft', stagger(100, animateChild()), { optional: true }),
      query('@appear', stagger(100, animateChild()), { optional: true }),
      query('@appearDisappearSmooth', stagger(100, animateChild()), { optional: true })
    ])
  ]),
  trigger('slideUp', [
    transition(':enter', [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate('700ms ease-in', style({ transform: 'translateY(0%)', opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1, 'min-height': '0px', height: '*' }),
      animate('200ms ease-out', style({ opacity: 0, height: '0px' }))
    ])
  ]),
  trigger('slideDown', [
    transition(':enter', [
      style({ transform: 'translateY(-10%)', opacity: 0 }),
      animate('200ms ease-in', style({ transform: 'translateY(-0%)', opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1, 'min-height': '0px', height: '*' }),
      animate('200ms ease-out', style({ opacity: 0, height: '0px' }))
    ])
  ]),
  trigger('slideLeft', [
    transition(':enter', [
      style({ transform: 'translateX(100%)'}),
      animate('400ms cubic-bezier(.22,.05,.38,.94)', style({ transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      animate('600ms cubic-bezier(.3,-0.15,.59,.27)', style({ transform: 'translateX(100%)'}))
    ])
  ]),
  trigger('slideRight', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)'}),
      animate('400ms cubic-bezier(.22,.05,.38,.94)', style({ transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      animate('600ms cubic-bezier(.3,-0.15,.59,.27)', style({ transform: 'translateX(-100%)'}))
    ])
  ]),
  trigger('appear', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('350ms ease-out', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('0ms ease-out', style({ opacity: 0 }))
    ])
  ]),
  trigger('appearDisappearSmooth', [
    transition(':enter', [
      animate('200ms ease-in', keyframes([
        style({ opacity: 0, 'min-height': '0px', height: '0px', offset: 0 }),
        style({ opacity: 0, 'min-height': '*', height: '*', offset: 0.7 }),
        style({ opacity: 1, offset: 1 })
      ]))
    ]),
    transition(':leave', [
      animate('350ms ease-out',
        keyframes([
          style({ 'min-height': '0px', height: '*', offset: 0 }),
          style({ opacity: 0, offset: 0.3 }),
          style({ height: '0px', offset: 1, 'marginBottom': '0px' })
        ]))
    ]),
    transition('* => blink', [
      animate('500ms ease-in-out', keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0.5, offset: 0.2 }),
        style({ opacity: 0.2, offset: 0.5 }),
        style({ opacity: 0.5, offset: 0.8 }),
        style({ opacity: 1, offset: 1 })
      ]))
    ])
  ]),
  trigger('openClose', [
    transition('* => open', [
      style({ height: '0px' }),
      animate('350ms ease-in', style({ height: '*' }))
    ]),
    transition('open => close', [
      style({ height: '*' }),
      animate('350ms ease-in', style({ height: '0px' }))
    ])
  ]),
  trigger('expandFilterField', [
    state('expanded', style({ width: '100%' })),
    state('closed', style({ width: '*' })),
    transition('* => expanded', [
      animate('200ms ease-in')
    ]),
    transition('expanded => closed', [
      animate('200ms ease-out')
    ])
  ])
]
