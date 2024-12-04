import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
