import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-clock',
  template: `{{time | date:'medium'}}`,
})

export class ClockComponent {
  @Input() time;
}
