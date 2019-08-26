import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ta-fa-input',
  templateUrl: './ta-fa-input.component.html',
  styleUrls: ['./ta-fa-input.component.scss']
})
export class TaFaInputComponent implements OnInit {
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}

  get classes() {
    const cssClasses = {};
    if (this.icon) {
      cssClasses['fa'] = true;
      cssClasses[`fa-${this.icon}`] = true;
    }
    return cssClasses;
  }
}
